import { team } from '@/data/AboutUsData'
import React from 'react'

function AboutTeam() {
    return (
        <section
            className="px-6 md:px-24 py-28 border-t border-secondary/30"
        >
            <p className="text-xs uppercase tracking-[0.4em] mb-4 font-semibold text-secondary">
                The People
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-white">Behind NextStep.</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="p-8 group transition-all duration-300 cursor-default border border-secondary/20 hover:border-secondary/40"
                    >
                        <div
                            className="text-primary bg-secondary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform duration-300"
                        >
                            {member.initial}
                        </div>
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-sm mt-1 uppercase tracking-widest text-white/40">
                            {member.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutTeam