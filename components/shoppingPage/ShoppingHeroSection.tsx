import { Shoe } from '@/types/Shoe'
import React from 'react'

function ShoppingHeroSection({ allShoes }: { allShoes: Shoe[] }) {
    return (
        <header className="relative bg-primary overflow-hidden px-6 md:px-24 pt-36 pb-16">

            {/* Ghost background text */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black leading-none select-none pointer-events-none text-secondary/[0.04]">
                SHOP
            </span>

            {/* Eyebrow */}
            <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-secondary/70 mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-secondary/40 inline-block" />
                Our Collection
            </p>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
                Find Your <br />
                <span className="text-secondary">Perfect</span>{" "}
                <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,211,60,0.35)" }}>
                    Pair.
                </span>
            </h1>

            {/* Subtext + stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed">
                    Explore {allShoes.length}+ styles from the world's top brands —
                    built for performance, comfort, and everyday style.
                </p>

                <div className="flex gap-6">
                    {[
                        { value: `${allShoes.length}+`, label: "Styles" },
                        { value: "5+", label: "Brands" },
                        { value: "4", label: "Categories" },
                    ].map((stat) => (
                        <div key={stat.label} className="border-l border-secondary/20 pl-4">
                            <p className="text-xl font-black text-secondary">{stat.value}</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 mt-0.5">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
        </header>
    )
}

export default ShoppingHeroSection