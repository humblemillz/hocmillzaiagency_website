"use client";































import { motion } from "framer-motion";















import Link from "next/link";















import { ArrowRight } from "lucide-react";































export function ServicesCTA() {















  return (















    <section className="py-24 relative overflow-hidden">















      <div className="absolute inset-0 bg-gradient-radial opacity-20" />















      <div className="absolute inset-0 grid-overlay opacity-10" />















      















      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">















        <motion.div















          initial={{ opacity: 0, y: 20 }}















          whileInView={{ opacity: 1, y: 0 }}















          viewport={{ once: true }}















          transition={{ duration: 0.6 }}















          className="text-center"















        >















          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">















          Transforming Businesses with Intelligent
          Automation and AI Solutions















          </h2>















          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">















            Let us help you build smarter, faster, and more efficient business processes through AI. 















            Partner with us to automate success.















          </p>































          <div className="flex flex-wrap justify-center gap-6">















            <Link















              href="https://calendar.app.google/zsD9pHR5M1jBr5JT9"















              target="_blank"















              rel="noopener noreferrer"















              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"















            >















              <span>Get a Free Consultation</span>















              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />















            </Link>















            <Link















              href="#demo"















              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-200"















            >















              Schedule a Demo















            </Link>















          </div>















        </motion.div>















      </div>















    </section>















  );















} 






























































































































































































































































































































































































































































































































