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
        name: "nerdboi.online",
        redirects: ["www.nerdboi.online"],
        dns: false,
        cert: 'arn:aws:acm:us-east-1:311141549954:certificate/97107248-bb5b-4e09-9fe6-b37735aeea3c',
      },
    });

    $output({
      website_custom_domain: site.url,
    });
  },
});
