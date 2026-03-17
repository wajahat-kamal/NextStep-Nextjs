"use client"
import React from 'react'
import { motion } from "motion/react"

function ContactHeroSection() {
    return (
        <section className="relative overflow-hidden px-6 md:px-24 pt-32 pb-10">

            {/* Ghost text */}
            <motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[16vw] font-black leading-none select-none pointer-events-none text-secondary/4"
            >
                CONTACT
            </motion.span>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[10px] uppercase tracking-[0.4em] font-semibold text-secondary/70 mb-4 flex items-center gap-3"
            >
                <span className="h-px w-8 bg-secondary/40 inline-block" />
                Get In Touch
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight"
            >
                We'd Love To <br />
                <span className="text-secondary">Hear</span>{" "}
                <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,211,60,0.35)" }}>
                    From You.
                </span>
            </motion.h1>

            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
        </section>
    )
}

export default ContactHeroSection