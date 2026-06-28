import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import DemoScreen from "./DemoScreen";

export default function DemoLaptop() {
  return (
    <div className="relative flex justify-center">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[120px]" />

      {/* Floating gradient */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-primary/10 via-cyan-400/5 to-sky-400/10 blur-[120px]"
      />

      {/* Laptop */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: .96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: .35,
        }}
        transition={{
          duration: .9,
        }}
        className="relative z-20"
      >

        <MacbookScroll
          showGradient={false}
          title={<></>}
          badge={null}
        >

          <DemoScreen />

        </MacbookScroll>

      </motion.div>

      {/* Reflection */}

      <motion.div
        animate={{
          opacity: [.15, .3, .15],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="pointer-events-none absolute top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-[80px]"
      />

    </div>
  );
}