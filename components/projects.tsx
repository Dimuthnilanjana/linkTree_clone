"use client";

import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  searchQuery: string;
}

const projects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with Next.js and TailwindCSS",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Beta",
    description: "An innovative dashboard with real-time analytics",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Gamma",
    description: "E-commerce platform with modern UI/UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects({ searchQuery }: ProjectsProps) {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery) ||
    project.description.toLowerCase().includes(searchQuery)
  );

  if (filteredProjects.length === 0) return null;

  return (
    <section className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-4"
          >
            <div className="aspect-[2/1] relative rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-3">
              <Link
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Live Site</span>
              </Link>
              <Link
                href={project.repoUrl}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}