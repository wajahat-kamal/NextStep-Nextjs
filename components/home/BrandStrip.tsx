"use client"
import { motion } from "motion/react"

const brands = ["Nike", "Adidas", "Vans", "Reebok", "Hush Puppies", "Nike", "Adidas", "Vans", "Reebok", "Hush Puppies"]

function BrandStrip() {
    return (
        <section className="w-full py-14 overflow-hidden">

            {/* Heading */}
            <p className="text-center text-xs uppercase tracking-[0.4em] text-secondary/60 font-semibold mb-10">
                Trusted Brands
            </p>

            {/* Sliding Track */}
            <div className="relative flex overflow-hidden">

                {/* Gradient fade left */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-primary to-transparent pointer-events-none" />
                {/* Gradient fade right */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-primary to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {brands.map((brand, i) => (
                        <div
                            key={`${brand}-${i}`}
                            className={`shrink-0 px-14 py-6 text-2xl font-black tracking-tight cursor-default transition-opacity duration-300 hover:opacity-70 ${
                                i % 2 === 0
                                    ? "bg-secondary text-primary"
                                    : "border border-secondary/30 text-secondary"
                            }`}
                        >
                            {brand}
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}

export default BrandStrip