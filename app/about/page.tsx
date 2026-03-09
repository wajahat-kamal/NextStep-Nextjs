import { stats, team, values } from "@/data/AboutUsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NextStep",
    description: "Learn about NextStep — our story, mission, and the people behind the shoes.",
};



const PRIMARY = "#021B41";
const SECONDARY = "#FFD33C";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans" style={{ backgroundColor: PRIMARY, color: "#fff" }}>

            {/* Hero */}
            <section className="relative px-6 md:px-24 pt-40 pb-24 overflow-hidden">
                <span
                    className="absolute top-20 right-0 text-[20vw] font-black select-none leading-none pointer-events-none"
                    style={{ color: "rgba(255,211,60,0.05)" }}
                >
                    NEXTSTEP
                </span>

                <p className="text-xs uppercase tracking-[0.4em] mb-6 font-semibold" style={{ color: SECONDARY }}>
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

                <div
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{ background: `linear-gradient(to right, transparent, rgba(255,211,60,0.3), transparent)` }}
                />
            </section>

            {/* Stats */}
            <section
                className="px-6 md:px-24 py-20 grid grid-cols-2 md:grid-cols-4"
                style={{
                    borderTop: "1px solid rgba(255,211,60,0.15)",
                    borderBottom: "1px solid rgba(255,211,60,0.15)",
                }}
            >
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className="py-10 px-6 text-center"
                        style={{ borderRight: i !== stats.length - 1 ? "1px solid rgba(255,211,60,0.15)" : "none" }}
                    >
                        <p className="text-5xl md:text-6xl font-black" style={{ color: SECONDARY }}>{stat.number}</p>
                        <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </section>

            {/* Mission */}
            <section className="px-6 md:px-24 py-28 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] mb-4 font-semibold" style={{ color: SECONDARY }}>
                        Our Mission
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                        Every Step Should Feel Like Yours.
                    </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
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

            {/* Values */}
            <section
                className="px-6 md:px-24 py-20"
                style={{ borderTop: "1px solid rgba(255,211,60,0.15)" }}
            >
                <p className="text-xs uppercase tracking-[0.4em] mb-16 font-semibold" style={{ color: SECONDARY }}>
                    What We Stand For
                </p>
                <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,211,60,0.12)" }}>
                    {values.map((value) => (
                        <div
                            key={value.number}
                            className="p-10 group transition-colors duration-300 cursor-default"
                            style={{ backgroundColor: PRIMARY }}
                        // onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#032460")}
                        // onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
                        >
                            <span
                                className="text-6xl font-black block mb-6"
                                style={{ color: "rgba(255,211,60,0.12)" }}
                            >
                                {value.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section
                className="px-6 md:px-24 py-28"
                style={{ borderTop: "1px solid rgba(255,211,60,0.15)" }}
            >
                <p className="text-xs uppercase tracking-[0.4em] mb-4 font-semibold" style={{ color: SECONDARY }}>
                    The People
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-white">Behind NextStep.</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="p-8 group transition-all duration-300 cursor-default"
                            style={{ border: "1px solid rgba(255,211,60,0.2)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.6)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.2)")}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: SECONDARY, color: PRIMARY }}
                            >
                                {member.initial}
                            </div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-sm mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section
                className="mx-6 md:mx-24 mb-24 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
                style={{ backgroundColor: SECONDARY }}
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: PRIMARY }}>
                        Ready to Take Your <br />Next Step?
                    </h2>
                    <p className="mt-2 text-sm" style={{ color: "rgba(2,27,65,0.6)" }}>
                        Browse our full collection and find your perfect pair.
                    </p>
                </div>
                <a
                    href="/shopping"
                    className="px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap"
                    style={{ backgroundColor: PRIMARY, color: SECONDARY }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#032460")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
                >
                    Shop Now
                </a>
            </section>

        </main>
    );
}