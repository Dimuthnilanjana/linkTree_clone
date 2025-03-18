"use client";

import { useState } from 'react';
import Profile from '@/components/profile';
import Links from '@/components/links';
import Products from '@/components/products';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import ThemeToggle from '@/components/theme-toggle';
import Search from '@/components/search';
import CalWidget from "@/components/CalWidget";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="max-w-2xl mx-auto space-y-8 px-4 py-12 relative">
        <ThemeToggle />
        <Profile />
        {/* <Search onSearch={handleSearch} /> */}
        <Links searchQuery={searchQuery} />
        {/* <Products searchQuery={searchQuery} />
        <Projects searchQuery={searchQuery} /> */}
        
        <Footer />
      </div>
    </main>
  );
}