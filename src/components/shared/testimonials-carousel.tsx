"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/data/site";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-card backdrop-blur-2xl">
      <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
      <Quote className="h-10 w-10 text-cyan-200" />
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45 }}
          className="mt-6"
        >
          <p className="max-w-3xl text-xl leading-9 text-white">{testimonial.quote}</p>
          <div className="mt-8">
            <p className="font-heading text-lg text-white">{testimonial.name}</p>
            <p className="text-sm text-slate-400">{testimonial.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.name}
            aria-label={`Show testimonial ${dotIndex + 1}`}
            className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-10 bg-cyan-300" : "w-2.5 bg-white/20"}`}
            onClick={() => setIndex(dotIndex)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
