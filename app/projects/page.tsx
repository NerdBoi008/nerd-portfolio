"use client";

import Navbar from "@/components/common/navbar";
import ProjectCard from "@/components/common/project-card";
import { Project } from "@/types";
import React from "react";
import Masonry from "react-masonry-css";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "[ My Own ] Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and TailwindCSS",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
      githubUrl: "https://github.com/NerdBoi008/nerd-portfolio",
      liveUrl: "https://www.nerdboi.online",
      imageUrl: "/cdn/nerdboi-portfolio-poster.jpg",
    },
    {
      id: 2,
      title: "[ Swadhesi ] E-commerce For Clothing",
      description:
        "A full-stack e-commerce application for clothing, featuring product listings, shopping cart, and secure payment integration.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "RazorPay", "Redux"],
      githubUrl: "https://github.com/NerdBoi008/swadhesi-ecom",
      liveUrl: "https://www.swadhesi.com",
      imageUrl: "/cdn/swadhesi-poster.jpg",
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <main className="flex flex-col">
      <Navbar pageHeading={"My projects"} />
      <section className="flex-1 w-full max-w-7xl mx-auto px-10 md:px-20 py-8 overflow-y-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-3"
          columnClassName="pl-3 bg-clip-padding"
        >
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Masonry>
      </section>
    </main>
  );
}
