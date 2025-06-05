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

    // Configure OpenID Connect for GitHub Actions
    // This creates the IAM OIDC Provider and Role for GitHub Actions
    const github = new aws.iam.OpenIdConnectProvider("GithubProvider", {
      url: "https://token.actions.githubusercontent.com",
      clientIdLists: ["sts.amazonaws.com"],
    });

    new aws.iam.Role("GithubActionsDeployRole", {
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
              // This is the crucial change: 'StringEquals' for the 'aud' claim
              StringEquals: {
                [`${github.url}:aud`]: "sts.amazonaws.com",
              },
              // And 'StringLike' for the 'sub' claim (repository path)
              StringLike: {
                [`${github.url}:sub`]: `repo:${process.env.GITHUB_REPOSITORY}:*`,
              },
            },
          },
        ],
      },
      managedPolicyArns: [
        "arn:aws:iam::311141549954:policy/SST-Policy",
      ],
    });

    const site = new sst.aws.StaticSite("nerdboi-portfolio-site", {
      domain: {
        name: "nerdboi.dev",
        aliases: ["www.nerdboi.dev"]
      }
    })

    $output({
      website_custom_domain: site.url,
    })
  },
});
