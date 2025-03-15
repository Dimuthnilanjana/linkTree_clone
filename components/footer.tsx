"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, url: "https://github.com/dimuth" },
  { icon: Twitter, url: "https://twitter.com/dimuth" },
  { icon: Linkedin, url: "https://linkedin.com/in/dimuth" },
  { icon: Instagram, url: "https://instagram.com/dimuth" }
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
      <div className="text-sm text-muted-foreground">
        <p>© 2025 Dimuth Nilanjana. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ by</p><a href="https://dimuthnilanjana.com" className="text-decorations-none"> Dimuth Nilanjana</a>
      </div>
    </motion.footer>
  );
}