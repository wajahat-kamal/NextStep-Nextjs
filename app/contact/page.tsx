import type { Metadata } from "next"
import ContactHeroSection from "@/components/contactPage/ContactHeroSection"
import ContactLeftInfo from "@/components/contactPage/ContactLeftInfo"
import ContactRightInfo from "@/components/contactPage/ContactRightInfo"

export const metadata: Metadata = {
    title: "Contact | NextStep",
    description: "Get in touch with NextStep"
}

export default function ContactPage() {

    return (
        <main className="min-h-screen bg-bgColor">

            <ContactHeroSection />
            {/* Main Content */}
            <section className="px-6 md:px-24 py-16 grid md:grid-cols-2 gap-16 items-start">
                <ContactLeftInfo />
                <ContactRightInfo />
            </section>

        </main>
    )
}