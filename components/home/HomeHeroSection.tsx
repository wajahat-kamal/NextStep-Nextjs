"use client"
import Image from 'next/image'
import bgImage from "@/assets/main-bg-image.jpg"
import { motion } from 'motion/react'
import Stats from '../reusable/Stats'
import Link from 'next/link'

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

            {/* Overlay — fades in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black/40 z-1"
            />

            <div className="relative z-2 h-full flex flex-col justify-center px-4 md:px-24">
                <div className="max-w-2xl">

                    {/* Eyebrow — slides in from left */}
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs md:text-sm uppercase md:tracking-[0.3em] text-secondary font-medium mb-2 block"
                    >
                        New Collection — Spring 2026
                    </motion.span>

                    {/* Heading — slides up with slight blur */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
                    >
                        Step Into the <br />
                        <span className="italic font-light text-secondary">Next Version</span>{" "}
                        of You
                    </motion.h1>

                    {/* Description — fades up */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        className="text-xs md:text-lg text-white/70 max-w-[290px] md:max-w-xl leading-relaxed mb-4"
                    >
                        Crafted for those who move with purpose. Explore footwear that blends
                        performance, style, and comfort — built for wherever life takes you next.
                    </motion.p>

                    {/* Buttons — staggered scale in */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <Link
                            href='/shopping'
                            className="bg-secondary hover:bg-secondary/80 text-primary cursor-pointer text-center font-semibold py-2.5 px-3 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-colors duration-300"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/shopping"
                            className="border border-white/40 hover:border-secondary hover:text-secondary cursor-pointer text-white text-center py-2.5 px-3 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-colors duration-300"
                        >
                            Explore Collection
                        </Link>
                    </motion.div>

                    <Stats/>

                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection