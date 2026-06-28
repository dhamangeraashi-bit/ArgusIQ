import { motion } from "framer-motion";
import { TrendingDown, Sparkles } from "lucide-react";

import GlassCard from "./GlassCard";
import { forecast } from "../data/demoData";

export default function ForecastCard() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            AI Forecast
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            14-Day Prediction
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Sparkles size={22} />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Current Score
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-5xl font-bold text-slate-900 dark:text-white"
          >
            {forecast.current}
          </motion.h2>
        </div>

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Predicted
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .15 }}
            className="mt-2 text-5xl font-bold text-rose-400"
          >
            {forecast.predicted}
          </motion.h2>
        </div>
      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="flex items-center justify-between rounded-xl bg-rose-500/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <TrendingDown size={22} className="text-rose-400" />

          <div>
            <p className="font-semibold text-rose-400">
              {forecast.direction}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Expected trend
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Confidence
          </p>

          <p className="text-lg font-bold text-primary">
            {forecast.confidence}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}