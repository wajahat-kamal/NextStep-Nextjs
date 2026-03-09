import { values } from '@/data/AboutUsData'
import React from 'react'

function AboutValues() {
    return (
        <section
            className="px-6 md:px-24 py-20 border-t border-secondary/20"
        >
            <p className="text-xs uppercase tracking-[0.4em] mb-16 font-semibold text-secondary">
                What We Stand For
            </p>
            <div className="grid md:grid-cols-2 gap-px bg-secondary/20">
                {values.map((value) => (
                    <div
                        key={value.number}
                        className="p-10 group cursor-pointer transition-colors duration-300 bg-primary hover:bg-[#032460]"
                    >
                        <span
                            className="text-6xl font-black block mb-6 text-secondary/30"
                        >
                            {value.number}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                        <p className="leading-relaxed text-sm text-white/40">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutValues