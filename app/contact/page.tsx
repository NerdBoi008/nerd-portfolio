import Navbar from "@/components/common/navbar";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/lib/data-constants";

const linkButton: {
  href: string;
  icon: React.ReactNode;
  label: string;
}[] = [
  {
    href: EMAIL_LINK,
    icon: <Mail className="h-4 w-4" />,
    label: "moinm509@gmail.com",
  },
  {
    href: GITHUB_LINK,
    icon: <Github className="h-4 w-4" />,
    label: "Github Profile",
  },
  {
    href: LINKEDIN_LINK,
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn Profile",
  },
];

const ContactPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center w-full">
      <Navbar pageHeading={"Contact"} />
      <section className="flex flex-1 w-full items-center justify-center p-5">
        <Card className="bg-c-blue-800 w-96 text-bg-light-text hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Let&apos;s Connect!
            </CardTitle>
            <CardDescription>
              Feel free to reach out through any of these platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {linkButton.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full flex items-center gap-2 hover:text-white hover:bg-c-blue-700 transition-colors duration-300"
              >
                {link.icon}
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              </Button>
            ))}
          </CardContent>
          <CardFooter className="text-center text-sm">
            <p>Looking forward to connecting with you!</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default ContactPage;
