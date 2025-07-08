"use client";

import { motion } from "framer-motion";
import { Twitter } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/dimuth" },
  { icon: Twitter, url: "https://twitter.com/dimuth" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/dimuth" },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Colombo",
      }).format(now);
      setCurrentTime(timeString);
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

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
      <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
        <p>
          Asia/Colombo, UTC+5:30:{" "}
          {currentTime}
        </p>
      </div>
    </motion.footer>
  );
}