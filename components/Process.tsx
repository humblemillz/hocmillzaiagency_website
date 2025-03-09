"use client";

import { motion } from "framer-motion";
import { Brain, Lightbulb, Cog, LineChart } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Understand Your Needs",
    description: "We begin by thoroughly understanding your goals, challenges, and workflows, ensuring we pinpoint where AI can provide the greatest impact.",
    icon: Brain,
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Customized Solutions",
    description: "Our specialists develop customized AI strategies and solutions, ranging from intelligent automation to tailored machine learning models, designed to integrate effortlessly with your operations.",
    icon: Lightbulb,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Develop and Integrate",
    description: "We create and seamlessly integrate AI solutions into your existing systems, minimizing disruption and enabling effortless scalability.",
    icon: Cog,
    color: "from-pink-600 to-red-600"
  },
  {
    title: "Enhance  and Scale",
    description: "Implementation is just the beginning. We continuously enhance and expand your AI tools, ensuring peak performance as your business evolves.",
    icon: LineChart,
    color: "from-red-600 to-orange-600"
  }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <pattern id="neural-net" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="currentColor" />
            <line x1="25" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Revolutionize Your Business with AI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our goal is to turn your business challenges into growth opportunities through advanced AI technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
                  <div className="relative dark-card rounded-2xl p-8 h-full transition-all duration-300 group-hover:translate-y-[-2px]">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-4 mb-6`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
          Ready to transform your business? Let’s create something extraordinary together.</h3>
          <div className="text-center mt-12">
            <Link
              href="https://calendar.app.google/zsD9pHR5M1jBr5JT9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Schedule Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      </div>
    </section>
  );
}