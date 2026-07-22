"use client";

import { motion } from "framer-motion";

export default function TheaterLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Luz superior */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600 blur-[180px]"
      />

      {/* Luz izquierda */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[140px]"
      />

      {/* Luz derecha */}
      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
        }}
        className="absolute right-[-180px] top-1/2 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[140px]"
      />

    </div>
  );
}