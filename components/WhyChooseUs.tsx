"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Settings, 
  Users,
  Sparkles,
  HeadphonesIcon
} from "lucide-react";

const benefits = [
  {
    title: "Tailored AI Solutions",
    description: "Every business faces distinct challenges, and our team of AI specialists designs personalized automation and AI solutions that will integrate effortlessly into your workflows.",
    icon: Brain,
    metric: ""
  },
  {
    title: "Cutting-Edge Technology",
    description: "We utilize the most recent innovations in AI, such as large language models and automation tools, to provide cutting-edge solutions that ensure your business stays ahead of the competition.",
    icon: Sparkles,
    metric: ""
  },
  {
    title: "Scalable and Secure",
    description: "Our AI solutions are built to adapt to your business's growth. Prioritizing strong security measures, we safeguard your data while ensuring effortless scalability to meet your evolving requirements.",
    icon: Shield,
    metric: ""
  },
  {
    title: "Tangible Results, Proven Success",
    description: "Our AI-powered strategies have transformed businesses by improving customer experiences, optimizing operations, cutting costs, boosting productivity, and fostering revenue growth.",
    icon: TrendingUp,
    metric: ""
  },
  {
    title: "Trusted Experts at Your Service",
    description: "Backed by years of experience and extensive AI expertise, our team is dedicated to providing dependable, transparent, and ethical solutions that deliver measurable impact.",
    icon: Users,
    metric: ""
  },
  {
    title: "End-to-End Support",
    description: "We guide you through every stage, from strategy and development to implementation and continuous optimization. Our support team ensures your AI solutions provide maximum result.",
    icon: HeadphonesIcon,
    metric: ""
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Hocmillz AI Automation Agency?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Delivering Customized AI Solutions to Propel Innovation, 
          Boost Efficiency, and Accelerate Business Growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
                <div className="relative dark-card rounded-2xl p-8 h-full transition-all duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-purple-600/10 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm text-purple-500 font-medium">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      </div>
    </section>
  );
}