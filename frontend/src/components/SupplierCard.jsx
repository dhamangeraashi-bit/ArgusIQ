import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import GlassCard from "./GlassCard";
import { supplier } from "../data/demoData";

export default function SupplierCard() {
  const isUp = supplier.trend === "up";

  return (
    <GlassCard className="h-full">
      <div className="flex items-start justify-between">
        {/* Left */}

        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Building2 size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
            {supplier.name}
          </h3>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {supplier.category}
          </p>
        </div>

        {/* Risk Badge */}

        <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
          <span className="text-sm font-semibold text-primary">
            {supplier.status}
          </span>
        </div>
      </div>

      {/* Location */}

      <div className="mt-8 flex items-center gap-3 text-slate-500 dark:text-slate-400">
        <MapPin size={18} />
        <span>{supplier.location}</span>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-6">
        {/* Score */}

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Supplier Risk Score
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="mt-2 text-5xl font-bold text-slate-900 dark:text-white"
          >
            {supplier.riskScore}
          </motion.h2>
        </div>

        {/* Trend */}

        <div className="flex items-end justify-end">
          <div
            className={`flex items-center gap-2 rounded-xl px-4 py-3 ${
              isUp
                ? "bg-rose-500/10 text-rose-400"
                : "bg-emerald-500/10 text-emerald-400"
            }`}
          >
            {isUp ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}

            <span className="font-semibold">
              {isUp ? "Increasing Risk" : "Improving"}
            </span>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            Overall Health
          </span>

          <span className="font-semibold text-primary">
            {supplier.riskScore}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${supplier.riskScore}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-primary via-cyan-400 to-sky-400"
          />
        </div>
      </div>
    </GlassCard>
  );
}