// src/components/AnimatedBackground.jsx

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-primary/20 blur-[180px]"
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-24 -z-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]"
      />

      {/* Sky Orb */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 bottom-0 -z-20 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[130px]"
      />

      {/* Rotating Gradient Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-30 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 via-cyan-400/5 to-sky-400/5 blur-[160px]"
      />

      {/* Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-30 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
    </>
  );
}