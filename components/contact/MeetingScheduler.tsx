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



  

} 






