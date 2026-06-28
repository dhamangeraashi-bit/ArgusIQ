import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={clsx(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10 dark:border-white/10",
        "bg-white/70 dark:bg-[#161B22]/70",
        "backdrop-blur-2xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.15)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5" />

      {/* Border Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      {/* Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
}