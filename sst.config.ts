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

    let deployRole: aws.iam.Role;
  try {
    const existingRole = await aws.iam.getRole({ name: "YourPreExistingDeployRoleName" });
    const attachedPolicies = new aws.iam.RolePolicyAttachment("ExistingRolePolicies", { 
      role: existingRole.name,
      policyArn: "arn:aws:iam::311141549954:policy/SST-Policy"
    });
    deployRole = new aws.iam.Role("ExistingDeployRole", {
      name: existingRole.name,
      assumeRolePolicy: existingRole.assumeRolePolicy,
      path: existingRole.path,
      managedPolicyArns: [attachedPolicies.policyArn],
    });
    console.log("Using existing deploy role:", deployRole.arn);
  } catch (e) {
    // If the role doesn't exist, create it
    console.log("Pre-existing deploy role not found, creating new one.");
    const github = new aws.iam.OpenIdConnectProvider("GithubProvider", {
      url: "https://token.actions.githubusercontent.com",
      clientIdLists: ["sts.amazonaws.com"],
    });

    deployRole = new aws.iam.Role("GithubActionsDeployRole", {
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
              StringEquals: {
                [`${github.url}:aud`]: "sts.amazonaws.com",
              },
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
  }

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
