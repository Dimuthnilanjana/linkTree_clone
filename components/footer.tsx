"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { FaGithub,FaLinkedin  } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub , url: "https://github.com/dimuth" },
  { icon: Twitter, url: "https://twitter.com/dimuth" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/dimuth" }
  // { icon: Instagram, url: "https://instagram.com/dimuth" }
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center space-y-4 mt-12"
    >
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <social.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>
      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        <p>© 2025 Dimuth Nilanjana. All rights reserved.</p>
      </div>
      <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
        <p>Made with Dimuth Nilanjana</p>
        <motion.span
          className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.footer>
  );
}
