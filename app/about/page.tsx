import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import AboutOurMission from "@/components/aboutPage/AboutOurMission";
import AboutStats from "@/components/aboutPage/AboutStats";
import AboutValues from "@/components/aboutPage/AboutValues";
import { stats, team, values } from "@/data/AboutUsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NextStep",
    description: "Learn about NextStep — our story, mission, and the people behind the shoes.",
};


export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans bg-primary text-white pb-16">

            <AboutHeroSection />
            <AboutStats />
            <AboutOurMission/>
            <AboutValues/>

            {/* Team */}
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

            {/* CTA Banner */}
            <section
                className="mx-6 md:mx-24 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-secondary"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight text-primary">
                        Ready to Take Your <br />Next Step?
                    </h2>
                    <p className="mt-2 text-sm text-black/60" >
                        Browse our full collection and find your perfect pair.
                    </p>
                </div>
                <a
                    href="/shopping"
                    className="bg-primary hover:bg-[#032460] text-secondary px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap"
                >
                    Shop Now
                </a>
            </section>

        </main>
    );
}