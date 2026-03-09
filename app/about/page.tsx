import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import AboutOurMission from "@/components/aboutPage/AboutOurMission";
import AboutStats from "@/components/aboutPage/AboutStats";
import AboutTeam from "@/components/aboutPage/AboutTeam";
import AboutValues from "@/components/aboutPage/AboutValues";
import CTABanner from "@/components/CTABanner";
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
            <AboutOurMission />
            <AboutValues />
            <AboutTeam />
            <CTABanner />

        </main>
    );
}