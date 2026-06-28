import { motion } from "framer-motion";
import {
  TriangleAlert,
  Clock3,
  ArrowRight,
} from "lucide-react";

import GlassCard from "./GlassCard";
import { latestAlert } from "../data/demoData";

export default function AlertCard() {
  return (
    <GlassCard className="h-full">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Latest Alert
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Procurement Notification
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
          <TriangleAlert size={22} />
        </div>
      </div>

      {/* Severity */}

      <div className="mt-8 inline-flex rounded-full bg-rose-500/10 px-4 py-2">
        <span className="font-semibold text-rose-400">
          {latestAlert.severity} Severity
        </span>
      </div>

      {/* Title */}

      <motion.h4
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 text-2xl font-bold text-slate-900 dark:text-white"
      >
        {latestAlert.title}
      </motion.h4>

      {/* Description */}

      <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
        {latestAlert.description}
      </p>

      {/* Time */}

      <div className="mt-8 flex items-center gap-3 text-slate-500 dark:text-slate-400">
        <Clock3 size={18} />

        <span>{latestAlert.time}</span>
      </div>

      {/* Recommendation */}

      <motion.div
        whileHover={{
          x: 4,
        }}
        className="mt-8 flex cursor-pointer items-center justify-between rounded-xl border border-primary/20 bg-primary/10 px-5 py-4 transition-all"
      >
        <div>
          <p className="font-semibold text-primary">
            View AI Recommendation
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Review suggested mitigation plan
          </p>
        </div>

        <ArrowRight
          size={20}
          className="text-primary"
        />
      </motion.div>
    </GlassCard>
  );
}