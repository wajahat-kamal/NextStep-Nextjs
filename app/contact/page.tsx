"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import ContactHeroSection from "@/components/contactPage/ContactHeroSection"
import ContactLeftInfo from "@/components/contactPage/ContactLeftInfo"

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) return
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1200)
    }

    return (
        <main className="min-h-screen bg-bgColor">

            <ContactHeroSection />
            {/* Main Content */}
            <section className="px-6 md:px-24 py-16 grid md:grid-cols-2 gap-16 items-start">
                <ContactLeftInfo/>
               
            </section>

        </main>
    )
}