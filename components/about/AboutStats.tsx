import { stats } from '@/data/AboutUsData'
import React from 'react'

function AboutStats() {
    return (
        <section
            className="px-6 md:px-24 py-20 grid grid-cols-2 md:grid-cols-4 border-y border-secondary/20"
        >
            {stats.map((stat, i) => (
                <div
                    key={stat.label}
                    className="py-10 px-6 text-center"
                    style={{ borderRight: i !== stats.length - 1 ? "1px solid rgba(255,211,60,0.15)" : "none" }}
                >
                    <p className="text-5xl md:text-6xl font-black text-secondary">{stat.number}</p>
                    <p className="text-xs uppercase tracking-widest mt-2 text-white/40">
                        {stat.label}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default AboutStats