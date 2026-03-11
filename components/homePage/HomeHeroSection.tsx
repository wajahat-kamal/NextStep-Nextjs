"use client"
import Image from 'next/image'
import bgImage from "@/assets/main-bg-image.jpg"
import { motion } from 'motion/react'

function HomeHeroSection() {
    return (
        <section id="hero" className="relative h-screen w-full">
            <Image
                src={bgImage}
                alt="Hero background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-1" />

            {/* Content */}
            <div className="relative z-2 h-full flex flex-col justify-center px-4 md:px-24">
                <div className="max-w-2xl">

                    {/* Eyebrow */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xs md:text-sm uppercase md:tracking-[0.3em] text-secondary font-medium mb-2 block"
                    >
                        New Collection — Spring 2026
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
                    >
                        Step Into the <br />
                        <span className="italic font-light text-secondary">Next Version</span>{" "}
                        of You
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xs md:text-lg text-white/70 max-w-[290px] md:max-w-xl leading-relaxed mb-4"
                    >
                        Crafted for those who move with purpose. Explore footwear that blends
                        performance, style, and comfort — built for wherever life takes you next.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="flex items-center gap-4"
                    >
                        <button className="bg-secondary hover:bg-secondary/80 text-primary cursor-pointer font-semibold p-4 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300">
                            Shop Now
                        </button>
                        <button className="border border-white/40 hover:border-secondary hover:text-secondary cursor-pointer text-white p-4 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300">
                            Explore Collection
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className="flex gap-10 mt-4 pt-2 border-t border-white/10"
                    >
                        {[
                            { value: "500+", label: "Styles" },
                            { value: "50+", label: "Brands" },
                            { value: "4.9★", label: "Rated" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.85 + i * 0.1 }}
                            >
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection