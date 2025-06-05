"use client";

import Navbar from "@/components/common/navbar";
import { PageTransition } from "@/components/common/page-transition";
import ProjectCard from "@/components/common/project-card";
import { Project } from "@/types";
import React from "react";
import Masonry from "react-masonry-css";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and TailwindCSS",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com",
      imageUrl: "/projects/portfolio.png",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration Full-stack e-commerce application with payment integration Full-stack e-commerce application with payment integration Full-stack e-commerce application with payment integration ",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-shop.com",
      imageUrl: "/projects/ecommerce.png",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-tasks.com",
      imageUrl: "/projects/taskmanager.png",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application using OpenWeather API",
      technologies: ["React", "TypeScript", "Axios", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://your-weather.com",
      imageUrl: "/projects/weather.png",
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <PageTransition>
      <main className="flex flex-col">
        <Navbar pageHeading={"My projects"} />
        <section className="flex-1 w-full max-w-7xl mx-auto px-10 md:px-20 py-8 overflow-y-auto">
          {/* <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2> */}
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
    </PageTransition>
  );
}
