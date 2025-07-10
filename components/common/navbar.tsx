"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  pageHeading: string;
  className?: string;
}

const Navbar = ({ 
  pageHeading,
  className 
}: NavbarProps) => {
  const router = useRouter();
  return (
    <nav className={`w-full flex items-center p-5 sticky top-0 z-50 backdrop-blur-xs bg-background/80 border-b border-background/20 ${className || ""}`} >
      <div className="absolute left-5">
        <Button
          variant={"ghost"}
          className="flex items-center gap-2 text-white hover:bg-gray-900 hover:text-bg-light-text transition-colors duration-300 group"
          onClick={() => router.push("/")}
        >
          <ChevronLeftIcon className="group-hover:-translate-x-0.5 transition" />
          Home
        </Button>
      </div>
      <h1 className="flex-1 text-center text-xl capitalize">
        {pageHeading}
      </h1>
    </nav>
  );
};

export default Navbar;