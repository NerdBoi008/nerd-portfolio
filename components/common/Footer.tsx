import { GITHUB_LINK } from "@/lib/data-constants";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-muted-foreground flex items-center justify-center py-3 ">
      <Link
        href={GITHUB_LINK}
        target="_blank"
        className="group hover:underline text-shadow-bg-light-text text-sm underline-offset-2 relative"
      >
        visit my github
        <Link2Icon className="absolute top-0.5 inline ml-1 size-4.5 invisible group-hover:visible" />
      </Link>
    </footer>
  );
};

export default Footer;
