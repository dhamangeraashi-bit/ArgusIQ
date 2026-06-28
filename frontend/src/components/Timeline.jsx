import { motion } from "framer-motion";
import {
  Factory,
  Radar,
  BrainCircuit,
  TrendingUp,
  BellRing,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: Factory,
    title: "Healthy Supplier",
    subtitle: "Everything appears normal",
    description:
      "Rajesh Textiles has active purchase orders, valid compliance, and stable delivery history.",
  },
  {
    icon: Radar,
    title: "Risk Signals Detected",
    subtitle: "Continuous AI monitoring",
    description:
      "Dispatch delays, GST filing gaps, and negative news are automatically detected across multiple sources.",
  },
  {
    icon: BrainCircuit,
    title: "AI Explains Why",
    subtitle: "Explainable Intelligence",
    description:
      "Instead of a black-box score, SupplyGuard highlights the exact operational, financial, compliance, and sentiment drivers behind the risk increase.",
  },
  {
    icon: TrendingUp,
    title: "Risk Forecast",
    subtitle: "Predict before disruption",
    description:
      "Machine learning forecasts the Supplier Risk Score over the next 14 days so procurement teams can intervene early.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    subtitle: "Real-time notifications",
    description:
      "High-risk suppliers automatically trigger alerts with recommended actions before disruptions impact business.",
  },
  {
    icon: ShieldCheck,
    title: "Confident Decisions",
    subtitle: "AI-powered procurement",
    description:
      "Teams prioritize suppliers using explainable intelligence instead of reactive firefighting.",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="mx-auto mb-24 max-w-4xl text-center"
      >

        <p className="eyebrow">

          PRODUCT JOURNEY

        </p>

        <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-6xl">

          From hidden supplier risks
          <br />
          to proactive action.

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-400">

          Every supplier is continuously monitored. SupplyGuard transforms
          thousands of fragmented signals into a single explainable AI-powered
          risk score.

        </p>

      </motion.div>

      {/* Timeline */}

      <div className="relative mx-auto max-w-5xl">

        {/* Center line */}

        <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-cyan-400 to-transparent" />

        <div className="space-y-16">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .35 }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                className="relative flex gap-8"
              >

                {/* Icon */}

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-xl">

                  <Icon
                    size={28}
                    className="text-primary"
                  />

                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="flex-1 rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm uppercase tracking-[0.25em] text-primary">

                        Step {index + 1}

                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">

                        {step.title}

                      </h3>

                      <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">

                        {step.subtitle}

                      </p>

                    </div>

                    <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                      LIVE

                    </div>

                  </div>

                  <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">

                    {step.description}

                  </p>

                </motion.div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}