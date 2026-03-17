import AboutHeroSection from "@/components/about/AboutHero";
import AboutOurMission from "@/components/about/OurMission";
import AboutStats from "@/components/about/AboutStats";
import AboutTeam from "@/components/about/Team";
import AboutValues from "@/components/about/Values";
import CTABanner from "@/components/reusable/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NextStep",
    description: "Learn about NextStep — our story, mission, and the people behind the shoes.",
};


export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans">

            <AboutHeroSection />
            <AboutStats />
            <AboutOurMission />
            <AboutValues />
            <AboutTeam />
            <CTABanner />

        </main>
    );
}