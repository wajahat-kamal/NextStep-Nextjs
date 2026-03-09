import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import AboutOurMission from "@/components/aboutPage/AboutOurMission";
import AboutStats from "@/components/aboutPage/AboutStats";
import AboutTeam from "@/components/aboutPage/AboutTeam";
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
            <AboutTeam/>

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