import { AlertTriangle, Clock, IndianRupee, RadioTower } from "lucide-react";
import { SectionMotion } from "./SectionMotion.jsx";

const problems = [
  { icon: Clock, title: "Late deliveries", copy: "Ratings drop before teams can react." },
  { icon: RadioTower, title: "No warning system", copy: "Signals stay scattered across tools." },
  { icon: IndianRupee, title: "Revenue leakage", copy: "Supplier failures hit orders directly." }
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-slate-50 py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Supplier risk is usually visible after the damage.
          </h2>
          <p className="mt-6 text-xl leading-9 text-slate-600 sm:text-2xl">
            Supply teams need early signals, not post-incident spreadsheets.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {problems.map((item, index) => (
            <SectionMotion
              key={item.title}
              delay={index * 0.08}
              className="rounded-lg bg-white px-8 py-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center justify-between gap-4">
                <item.icon className="text-primary" size={32} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-10 text-3xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">{item.copy}</p>
            </SectionMotion>
          ))}
        </div>

        <SectionMotion className="mt-24 rounded-lg bg-orange-50 px-8 py-12 text-slate-950 sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <AlertTriangle className="text-orange-600" size={36} />
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                60% of sellers face supplier issues annually.
              </p>
            </div>
            <span className="inline-flex w-fit rounded-md bg-orange-100 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
              Annual seller risk signal
            </span>
          </div>
        </SectionMotion>
      </div>
    </section>
  );
}
