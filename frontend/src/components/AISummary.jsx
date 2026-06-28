import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import GlassCard from "./GlassCard";
import { aiSummary } from "../data/demoData";

export default function AISummary() {
  return (
    <GlassCard className="h-full">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BrainCircuit size={22} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              AI Intelligence
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              Explainable AI Summary
            </h3>
          </div>
        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
          {aiSummary.confidence} Confidence
        </div>
      </div>

      {/* Explanation */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .2 }}
        className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5"
      >
        <div className="mb-4 flex items-center gap-2 text-primary">
          <Sparkles size={18} />
          <span className="text-sm font-semibold">
            AI Explanation
          </span>
        </div>

        <p className="leading-8 text-slate-600 dark:text-slate-300">
          {aiSummary.explanation}
        </p>
      </motion.div>

      {/* Drivers */}

      <div className="mt-8">
        <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Risk Drivers
        </h4>

        <div className="space-y-3">
          {aiSummary.drivers.map((driver, index) => (
            <motion.div
              key={driver}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-primary"
                />

                <span className="text-slate-700 dark:text-slate-300">
                  {driver}
                </span>
              </div>

              <ChevronRight
                size={18}
                className="text-slate-400"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/15 via-cyan-500/10 to-sky-500/10 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Recommendation
        </p>

        <p className="mt-3 leading-8 text-slate-700 dark:text-slate-200">
          {aiSummary.recommendation}
        </p>
      </div>
    </GlassCard>
  );
}