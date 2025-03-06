"use client";

import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div
        className={`
          relative rounded-2xl
          ${isFocused ? 'ring-2 ring-primary/50' : ''}
          transition-all duration-200
          bg-white/10 backdrop-blur-lg
          dark:bg-white/5
        `}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="relative flex items-center">
          <SearchIcon className="w-5 h-5 ml-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, products, or links..."
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-4 py-3 bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </motion.div>
  );
}