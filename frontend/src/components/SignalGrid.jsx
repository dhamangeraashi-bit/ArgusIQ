import { motion } from "framer-motion";
import {
  Activity,
  Landmark,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

import GlassCard from "./GlassCard";
import { kpis } from "../data/demoData";

const iconMap = {
  Operational: Activity,
  Financial: Landmark,
  Compliance: ShieldCheck,
  Sentiment: MessageSquare,
};

const colorMap = {
  emerald: "bg-emerald-500/15 text-emerald-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  blue: "bg-sky-500/15 text-sky-400",
  rose: "bg-rose-500/15 text-rose-400",
};

export default function SignalGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {kpis.map((item, index) => {
        const Icon = iconMap[item.title];

        return (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    colorMap[item.color]
                  }`}
                >
                  <Icon size={22} />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.change.startsWith("+")
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>

              <div className="mt-7">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${item.value}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.1,
                      delay: index * 0.12,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}