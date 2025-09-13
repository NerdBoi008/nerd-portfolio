import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-c-blue-800 border border-c-blue-500 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-c-blue-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Github size={16} />
              Code
            </Link>
          ) : (
            <Tooltip>
              <TooltipTrigger>
                <div className="flex gap-2 items-center text-muted-foreground">
                  <Github size={16} /> Code
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sorry, This is private repository.</p>
              </TooltipContent>
            </Tooltip>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Globe size={16} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
