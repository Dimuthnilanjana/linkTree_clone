"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Globe, Linkedin, Mail, Youtube } from "lucide-react";
import { FaBehance,FaDribbble} from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import Link from "next/link";

interface LinksProps {
  searchQuery: string;
}

const links = [
  {
    title: "Portfolio Website",
    url: "https://dimuthnilanjana.com",
    icon: Globe,
    style: "glass"
  },
  {
    title: "GitHub",
    url: "https://github.com/Dimuthnilanjana",
    icon: Github,
    style: "outline"
  },
  {
    title: "Behance",
    url: "https://www.behance.net/dimuthnilanjana",
    icon: FaBehance,
    style: "outline"
  },
  {
    title: "Dribble",
    url: "https://dribbble.com/Dimuthnilanjana",
    icon: FaDribbble,
    style: "outline"
  },
  {
    title: "Twitter",
    url: "https://x.com/DimuthNilanjana",
    icon: Twitter,
    style: "glass"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dimuthnilanjana/",
    icon: Linkedin,
    style: "glass"
  },
 
  {
    title: "Contact Me",
    url: "mailto:dimuthnilanjana.official@gmail.com",
    icon: Mail,
    style: "glass" //gradient
  },
  {
    title: "Shedule A Meeting",
    url: "https://cal.com/dimuth-nilanjana-ibty0q",
    icon: IoVideocam,
    style: "outline"
  },
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

export default function Links({ searchQuery }: LinksProps) {
  const filteredLinks = links.filter(link =>
    link.title.toLowerCase().includes(searchQuery)
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {filteredLinks.map((link, index) => (
        <motion.div key={index} variants={item}>
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full p-4 rounded-lg transition-all duration-200
              ${link.style === 'glass' ? 'bg-white/10 backdrop-blur-sm dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10' : ''}
              ${link.style === 'outline' ? 'border-2 border-primary hover:bg-primary/10' : ''}
              ${link.style === 'gradient' ? 'bg-gradient-to-r from-primary/80 via-primary to-primary/80 text-white hover:from-primary hover:via-primary/90 hover:to-primary' : ''}
              hover:scale-[1.02] active:scale-[0.98]
            `}
          >
            <div className="flex items-center space-x-3">
              <link.icon className="h-5 w-5" />
              <span className="font-medium">{link.title}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}