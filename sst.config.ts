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

    new aws.iam.Role(
      "GithubActionsDeployRole",
      {
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
                  [`${github.url}:sub`]: `repo:${process.env.GITHUB_REPOSITORY}:*`,
                },
              },
            },
          ],
        },
        // You can scope down permissions for production
        // For a portfolio, AdministratorAccess is fine for simplicity, but best practice is least privilege.
        managedPolicyArns: [
          "arn:aws:iam::aws:policy/AdministratorAccess", // Replace with more specific policies for production
        ],
      },
      {
        import: "arn:aws:iam::311141549954:role/GitHubActionsDeployRole",
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
