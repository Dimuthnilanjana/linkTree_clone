"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 bg-gradient-to-b from-primary/20 to-transparent p-1"
      >
        <div className="rounded-full overflow-hidden relative w-full h-full bg-gradient-to-b from-white/10 to-white/5 dark:from-black/10 dark:to-black/5">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent flex items-center justify-center gap-2"
      >
       
        Dimuth Nilanjana
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground max-w-md mx-auto"
      >
       UI/UX Engineer passionate about creating beautiful and functional web experiences. Building the future of the web, one project at a time.
      </motion.p>
    </motion.div>
  );
}
