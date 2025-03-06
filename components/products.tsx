"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Code, Palette, Box, Zap } from "lucide-react";
import Link from "next/link";

interface ProductsProps {
  searchQuery: string;
}

const products = [
  {
    title: "WebFlow",
    icon: Palette,
    url: "#",
    badge: "New",
    badgeColor: "from-blue-500 to-indigo-500"
  },
  {
    title: "DevTools",
    icon: Code,
    url: "#",
    badge: "Beta",
    badgeColor: "from-emerald-500 to-teal-500"
  },
  {
    title: "RocketApp",
    icon: Rocket,
    url: "#",
    badge: "Popular",
    badgeColor: "from-orange-500 to-red-500"
  },
  {
    title: "SparkUI",
    icon: Sparkles,
    url: "#",
    badge: "Featured",
    badgeColor: "from-purple-500 to-pink-500"
  },
  {
    title: "ZapTools",
    icon: Zap,
    url: "#",
    badge: "Pro",
    badgeColor: "from-yellow-500 to-orange-500"
  },
  {
    title: "BoxKit",
    icon: Box,
    url: "#",
    badge: "Alpha",
    badgeColor: "from-cyan-500 to-blue-500"
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

export default function Products({ searchQuery }: ProductsProps) {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );

  if (filteredProducts.length === 0) return null;

  return (
    <section className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
      >
        Products
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {filteredProducts.map((product, index) => (
          <motion.div key={index} variants={item}>
            <Link
              href={product.url}
              className="group block p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 blur-sm group-hover:blur opacity-75 group-hover:opacity-100 transition-all duration-200" />
                  <div className="relative p-2 rounded-lg bg-white/10 backdrop-blur">
                    <product.icon className="w-5 h-5" />
                  </div>
                </div>
                <span className="font-medium">{product.title}</span>
                <div className={`ml-auto px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${product.badgeColor} text-white shadow-lg`}>
                  {product.badge}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}