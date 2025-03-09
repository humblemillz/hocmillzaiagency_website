"use client";

import { motion } from "framer-motion";

export function AboutVision() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120B2E] to-[#0A051E]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision: Enabling Businesses to 
            <br />
            Unlock the Potential of AI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative dark-card rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
              At Hocmillz AI Agency, we aim to create a future where businesses of all sizes effortlessly 
              integrate artificial intelligence into their operations. Our mission is to make AI accessible, 
              scalable, and transformative for all.
              </p>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Whether you run a medium-sized enterprise or a large corporation,
              we serve as your reliable partner in automating processes, minimizing human involvement,
              and optimizing your operations for seamless, cost-efficient, and highly productive outcomes.
              </p>

              <p className="text-xl text-gray-400 leading-relaxed">
              AI is more than just a tool—it's the backbone of the next industrial revolution. With Hocmillz AI Agency as 
              your partner, you can future-proof your
              business, improve efficiency, and drive sustainable growth in today’s competitive landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}