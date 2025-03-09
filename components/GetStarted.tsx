"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceTypes = [
  "AI Automation",
  "AI Agent Development",
  "Data Analytics",
  "Custom AI Development",
  "Other",
];

export function GetStarted() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Please select a preferred meeting date");
      return;
    }

    if (!formData.service) {
      toast.error("Please select a type of service");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: date.toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      toast.success("Request submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setDate(undefined);
    } catch (error) {
      toast.error('Failed to submit request. Please try again later.');
      console.error('Submission Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      {/* Pink Glow Effect */}
      <div className="absolute inset-0 get-started-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <br />
            Powerful Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with us to explore how AI can transform your business. Schedule a meeting 
            with our experts and start your journey toward innovation.
          </p>

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

        
      </div>
    </section>
  );
}