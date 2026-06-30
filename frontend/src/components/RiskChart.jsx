import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import GlassCard from "./GlassCard";
import { chartData } from "../data/demoData";

export default function RiskChart() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            Supplier Risk Trend
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            14-Day Forecast
          </h3>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-2">
          <span className="text-sm font-semibold text-primary">
            AI Forecast
          </span>
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="riskFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00CDB0" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#00CDB0" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="rgba(148,163,184,0.12)"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[40, 100]}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                stroke: "#00CDB0",
                strokeWidth: 1,
              }}
              contentStyle={{
                background: "#161B22",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            {/* Historical Score */}

            <Area
              type="monotone"
              dataKey="score"
              stroke="#00CDB0"
              strokeWidth={3}
              fill="url(#riskFill)"
              connectNulls
            />

            {/* Forecast */}

            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#38BDF8"
              strokeWidth={3}
              strokeDasharray="8 6"
              dot={{
                r: 4,
                strokeWidth: 0,
                fill: "#38BDF8",
              }}
              activeDot={{
                r: 6,
              }}
              connectNulls
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-slate-500 dark:text-slate-400">
            Current Score
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-[3px] w-8 rounded-full bg-sky-400" />
          <span className="text-slate-500 dark:text-slate-400">
            AI Forecast
          </span>
        </div>
      </div>
    </GlassCard>
  );
}