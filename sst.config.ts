// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nerd-portfolio",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      region: "ap-south-1",
    };
  },
  async run() {
    const aws = await import("@pulumi/aws");

    new aws.iam.OpenIdConnectProvider("GithubProvider", {
      url: "https://token.actions.githubusercontent.com",
      clientIdLists: ["sts.amazonaws.com"],
      thumbprintLists: ["d89e3bd43d5d909b47a18977aa9d5ce36cee184c"],
    });

    new aws.iam.Role( "GithubActionsDeployRole", {
        assumeRolePolicy: '{"Statement":[{"Action":"sts:AssumeRoleWithWebIdentity","Condition":{"StringLike":{"token.actions.githubusercontent.com:aud":"sts.amazonaws.com","token.actions.githubusercontent.com:sub":"repo:NerdBoi008/nerd-portfolio:*"}},"Effect":"Allow","Principal":{"Federated":"arn:aws:iam::311141549954:oidc-provider/token.actions.githubusercontent.com"}}],"Version":"2012-10-17"}',
        managedPolicyArns: ["arn:aws:iam::311141549954:policy/SST-Policy"],
        permissionsBoundary: "arn:aws:iam::311141549954:policy/SST-Policy",
      },
    );

    const site = new sst.aws.Nextjs("nerdboi-portfolio-site", {
      domain: {
        name: "www.nerdboi.online",
        redirects: ["nerdboi.online"],
        dns: false,
        cert: "arn:aws:acm:us-east-1:311141549954:certificate/a53e75c9-6cf9-4402-9db5-0fb107655219"
      },
      // Optimize CDN caching for static assets
      assets: {
        // Cache versioned files (JS/CSS with hashes) for 1 year
        versionedFilesCacheHeader: "public,max-age=31536000,immutable",
        // Cache non-versioned files for 1 week on CDN, no browser cache
        nonVersionedFilesCacheHeader: "public,max-age=0,s-maxage=604800,stale-while-revalidate=86400"
      },
      // Enable image optimization at edge
      imageOptimization: {
        memory: "1024 MB", 
      },
    });

    $output({
      website_custom_domain: site.url,
    });
  },
});
