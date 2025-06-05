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

    const github = new aws.iam.OpenIdConnectProvider("GithubProvider", {
      url: "https://token.actions.githubusercontent.com",
      clientIdLists: ["sts.amazonaws.com"],
      thumbprintLists: ["d89e3bd43d5d909b47a18977aa9d5ce36cee184c"],
    });

    new aws.iam.Role( "GithubActionsDeployRole", {
        assumeRolePolicy: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Federated: github.arn,
              },
              Action: "sts:AssumeRoleWithWebIdentity",
              Condition: {
                StringLike: {
                  // Ensure this matches your GitHub repo name and allows any ref
                  [`${github.url}:sub`]: `repo:NerdBoi008/nerd-portfolio:*`,
                  // This part for 'aud' is often automatically handled by aws-actions/configure-aws-credentials,
                  // but it's good to explicitly include it for clarity if the error suggested it.
                  [`${github.url}:aud`]: "sts.amazonaws.com",
                },
              },
            },
          ],
        },
        managedPolicyArns: ["arn:aws:iam::311141549954:policy/SST-Policy"],
        permissionsBoundary: "arn:aws:iam::311141549954:policy/SST-Policy",
      },
      {
        import: "GitHubActionsDeployRole",
      }
    );

    const site = new sst.aws.StaticSite("nerdboi-portfolio-site", {
      domain: {
        name: "nerdboi.dev",
        aliases: ["www.nerdboi.dev"],
      },
    });

    $output({
      website_custom_domain: site.url,
    });
  },
});
