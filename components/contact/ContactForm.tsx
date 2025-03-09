"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const serviceId = "service_cyynitl"; // Replace with your EmailJS Service ID
    const templateId = "template_7740yfh"; // Replace with your EmailJS Template ID
    const publicKey = "PwzcD6hQqa-892pa_"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Not provided",
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 dark-card p-8 rounded-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-white/5 text-white px-3 py-2"
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-white/5 text-white px-3 py-2"
              placeholder="mike@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone (Optional)
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-white/5 text-white px-3 py-2"
              placeholder="+1 (545) 023-56000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-white/5 text-white px-3 py-2"
              placeholder="Tell us about your project..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
