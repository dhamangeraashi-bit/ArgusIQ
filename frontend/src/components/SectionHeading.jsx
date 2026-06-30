import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className={`mx-auto flex max-w-5xl flex-col ${alignment}`}
    >
      {/* Eyebrow */}

      {eyebrow && (
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </span>
      )}

      {/* Title */}

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}