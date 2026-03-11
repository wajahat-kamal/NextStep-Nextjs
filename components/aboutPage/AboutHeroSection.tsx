"use client"
import { motion } from "motion/react"
import { ArrowDownRight } from "lucide-react"

function AboutHero() {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden flex flex-col justify-center px-6 md:px-24 pt-18">

      {/* Giant ghost background text */}
      <motion.span
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-24 right-0 text-[18vw] font-black leading-none select-none pointer-events-none text-secondary/4"
      >
        ABOUT
      </motion.span>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="h-px w-10 bg-secondary/40" />
        <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-secondary/70">
          Our Story
        </p>
      </motion.div>

      {/* Main heading */}
      <div className="max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-[0.92] tracking-tight text-white mb-8"
        >
          We Live
          <br />
          <span className="text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255,211,60,0.45)" }}>
            & Breathe
          </span>
          <br />
          <span className="text-secondary">Footwear.</span>
        </motion.h1>

        {/* Description + side detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-10 md:gap-20 items-start"
        >
          <p className="text-base md:text-md text-white/55 max-w-lg leading-relaxed">
            NextStep was born from a simple frustration — finding great shoes
            shouldn't be this hard. So we built the store we always wanted to
            shop at. No compromises. Just great footwear.
          </p>

          {/* Side pill stats */}
          <div className="flex flex-row gap-4 shrink-0">
            {[
              { value: "2012", label: "Founded" },
              { value: "50K+", label: "Customers" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-secondary/20 px-5 py-3"
              >
                <p className="text-2xl font-black text-secondary">{item.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-10 right-6 md:right-24 flex items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <ArrowDownRight size={14} className="animate-bounce" />
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  )
}

export default AboutHero