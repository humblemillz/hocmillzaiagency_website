"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, Phone } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
];

const meetingTypes = [
  {
    icon: Video,
    label: "Video Call",
    description: "Meet via Google Meet or Zoom"
  },
  {
    icon: Phone,
    label: "Phone Call",
    description: "Traditional phone consultation"
  }
];

export function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule a Free Consultation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose a convenient time for us to discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Date Selection */}
          <div className="relative dark-card rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Calendar className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-white">Select Date</h3>
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-white/5 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Time Selection */}
          <div className="relative dark-card rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-white">Select Time</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg text-white transition-all ${selectedTime === time ? 'bg-purple-600' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting Type Selection */}
          <div className="relative dark-card rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Video className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-white">Meeting Type</h3>
            </div>
            <div className="space-y-4">
              {meetingTypes.map((type) => (
                <button
                  key={type.label}
                  onClick={() => setSelectedType(type.label)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all ${selectedType === type.label ? 'bg-purple-600' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  <type.icon className="w-5 h-5 text-purple-500" />
                  <div className="text-left">
                    <div className="text-white font-medium">{type.label}</div>
                    <div className="text-sm text-gray-400">{type.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}