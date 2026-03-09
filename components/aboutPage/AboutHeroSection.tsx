import React from 'react'

function AboutHeroSection() {
  return (
    <section className="relative px-6 md:px-24 pt-40 pb-24 overflow-hidden">
      <span
        className="absolute top-20 right-0 text-[20vw] font-black select-none leading-none pointer-events-none text-secondary/10"
      >
        NEXTSTEP
      </span>

      <p className="text-xs uppercase tracking-[0.4em] mb-6 font-semibold">
        Our Story
      </p>
      <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-white max-w-4xl">
        We Live <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: `1px rgba(255,211,60,0.5)` }}
        >
          & Breathe
        </span>{" "}
        <br />
        Footwear.
      </h1>
      <p className="mt-10 text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
        NextStep was born from a simple frustration — finding great shoes shouldn't be this hard.
        So we built the store we always wanted to shop at.
      </p>

      <div className="absolute bottom-0 left-0 w-full h-px bg-secondary/20" />
    </section>
  )
}

export default AboutHeroSection