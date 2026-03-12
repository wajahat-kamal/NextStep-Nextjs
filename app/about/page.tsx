import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import AboutOurMission from "@/components/aboutPage/OurMission";
import AboutStats from "@/components/aboutPage/AboutStats";
import AboutTeam from "@/components/aboutPage/Team";
import AboutValues from "@/components/aboutPage/Values";
import CTABanner from "@/components/reusable/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NextStep",
    description: "Learn about NextStep — our story, mission, and the people behind the shoes.",
};


export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans pb-16">

            <AboutHeroSection />
            <AboutStats />
            <AboutOurMission />
            <AboutValues />
            <AboutTeam />
            <CTABanner />

        </main>
    );
}