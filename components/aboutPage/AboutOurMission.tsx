import React from 'react'

function AboutOurMission() {
    return (
        <section className="px-6 md:px-24 py-28 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <p className="text-xs uppercase tracking-[0.4em] mb-4 font-semibold text-secondary">
                    Our Mission
                </p>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                    Every Step Should Feel Like Yours.
                </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/40" style={{ color: "rgba(255,255,255,0.6)" }}>
                <p>
                    We started NextStep in 2012 with a single rack of shoes and a belief that the right pair
                    can change how you feel about your day. That belief hasn't changed — it's only grown stronger.
                </p>
                <p>
                    Today we stock over 500 styles from 15+ of the world's most trusted brands, serving customers
                    across Pakistan and beyond. But we still treat every order like it's the first one we ever packed.
                </p>
            </div>
        </section>
    )
}

export default AboutOurMission