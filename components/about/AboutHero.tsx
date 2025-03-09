"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A051E] to-[#120B2E]" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Neural Network Animation */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <pattern id="neural-net-hero" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="currentColor" />
            <line x1="25" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-net-hero)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Shaping the Future of Business Through AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Empowering businesses of every size to adopt AI today, for a smarter, 
            cost-efficient, and more productive tomorrow.
          </p>
        </motion.div>

        {/* 3D Animation Container */}
      </div>
    </section>
  );
}