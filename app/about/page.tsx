import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NextStep",
    description: "Learn about NextStep — our story, mission, and the people behind the shoes.",
};

const stats = [
    { number: "12+", label: "Years in Business" },
    { number: "500+", label: "Styles Available" },
    { number: "50K+", label: "Happy Customers" },
    { number: "15+", label: "Premium Brands" },
];

const values = [
    {
        number: "01",
        title: "Quality First",
        description:
            "Every shoe on our shelves passes through a rigorous quality check. We partner only with brands that share our obsession with craftsmanship and durability.",
    },
    {
        number: "02",
        title: "Style for Everyone",
        description:
            "From kids to professionals, runners to fashion icons — NextStep curates footwear for every walk of life, every personality, every budget.",
    },
    {
        number: "03",
        title: "Honest Pricing",
        description:
            "No hidden markups. No fake discounts. Just real value for real people. We believe great shoes shouldn't cost the earth.",
    },
    {
        number: "04",
        title: "Community Driven",
        description:
            "We listen to our customers. Our collection evolves based on your feedback, your requests, and what you actually want to wear.",
    },
];

const team = [
    { name: "Hamza Raza", role: "Founder & CEO", initial: "H" },
    { name: "Sara Khan", role: "Head of Curation", initial: "S" },
    { name: "Ali Noor", role: "Brand Partnerships", initial: "A" },
];

export default function AboutPage() {
    return (
        <main className="bg-zinc-950 text-white min-h-screen font-sans">

            {/* Hero */}
            <section className="relative px-6 md:px-24 pt-40 pb-24 overflow-hidden">
                {/* Background large text */}
                <span className="absolute top-20 right-0 text-[20vw] font-black text-white/[0.03] select-none leading-none pointer-events-none">
                    NEXTSTEP
                </span>

                <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-6">
                    Our Story
                </p>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-white max-w-4xl">
                    We Live <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                        & Breathe
                    </span>{" "}
                    <br />
                    Footwear.
                </h1>
                <p className="mt-10 text-lg text-zinc-400 max-w-xl leading-relaxed">
                    NextStep was born from a simple frustration — finding great shoes shouldn't be this hard.
                    So we built the store we always wanted to shop at.
                </p>

                {/* Diagonal divider */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            </section>

            {/* Stats */}
            <section className="px-6 md:px-24 py-20 grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-zinc-800">
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`py-10 px-6 text-center ${i !== stats.length - 1 ? "border-r border-zinc-800" : ""}`}
                    >
                        <p className="text-5xl md:text-6xl font-black text-amber-400">{stat.number}</p>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Mission */}
            <section className="px-6 md:px-24 py-28 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4">Our Mission</p>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        Every Step Should Feel Like Yours.
                    </h2>
                </div>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
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
            <section className="px-6 md:px-24 py-20 border-t border-zinc-800">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-16">What We Stand For</p>
                <div className="grid md:grid-cols-2 gap-px bg-zinc-800">
                    {values.map((value) => (
                        <div
                            key={value.number}
                            className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-300"
                        >
                            <span className="text-6xl font-black text-zinc-800 group-hover:text-amber-400/20 transition-colors duration-300 block mb-6">
                                {value.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="px-6 md:px-24 py-28 border-t border-zinc-800">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4">The People</p>
                <h2 className="text-4xl md:text-5xl font-black mb-16">Behind NextStep.</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="border border-zinc-800 p-8 hover:border-amber-400/40 transition-colors duration-300 group"
                        >
                            {/* Avatar */}
                            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-black text-2xl font-black mb-6 group-hover:scale-110 transition-transform duration-300">
                                {member.initial}
                            </div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="mx-6 md:mx-24 mb-24 bg-amber-400 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                        Ready to Take Your <br />Next Step?
                    </h2>
                    <p className="text-black/60 mt-2 text-sm">
                        Browse our full collection and find your perfect pair.
                    </p>
                </div>
                <a
                    href="/shopping"
                    className="bg-black text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-colors duration-300 whitespace-nowrap"
                >
                    Shop Now
                </a>
            </section>

        </main>
    );
}