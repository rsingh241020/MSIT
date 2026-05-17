"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  size: 4 + (index % 5) * 3,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  duration: 10 + (index % 6) * 2,
  delay: index * 0.3,
}));

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/30 blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, 12, 0],
            opacity: [0.2, 0.65, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
