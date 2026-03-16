"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

const contactInfo = [
    {
        icon: <MapPin size={18} />,
        label: "Address",
        value: "Shop 12, Zamzama Boulevard, Karachi, Pakistan",
    },
    {
        icon: <Phone size={18} />,
        label: "Phone",
        value: "+92 300 1234567",
    },
    {
        icon: <Mail size={18} />,
        label: "Email",
        value: "hello@nextstep.pk",
    },
]

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

            {/* Hero */}
            <section className="relative overflow-hidden px-6 md:px-24 pt-36 pb-16">

                {/* Ghost text */}
                <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[16vw] font-black leading-none select-none pointer-events-none text-secondary/[0.04]"
                >
                    CONTACT
                </motion.span>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-[10px] uppercase tracking-[0.4em] font-semibold text-secondary/70 mb-4 flex items-center gap-3"
                >
                    <span className="h-px w-8 bg-secondary/40 inline-block" />
                    Get In Touch
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight"
                >
                    We'd Love To <br />
                    <span className="text-secondary">Hear</span>{" "}
                    <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,211,60,0.35)" }}>
                        From You.
                    </span>
                </motion.h1>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
            </section>

            {/* Main Content */}
            <section className="px-6 md:px-24 py-16 grid md:grid-cols-2 gap-16 items-start">

                {/* Left — Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-8"
                >
                    <div>
                        <p className="text-white/50 text-base leading-relaxed max-w-sm">
                            Have a question about an order, need sizing advice, or just want to say hello?
                            Drop us a message and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    {/* Contact info cards */}
                    <div className="flex flex-col gap-4">
                        {contactInfo.map((info) => (
                            <div
                                key={info.label}
                                className="flex items-start gap-4 border border-secondary/15 px-5 py-4 hover:border-secondary/35 transition-colors duration-300 group"
                            >
                                <span className="text-secondary/60 group-hover:text-secondary transition-colors duration-300 mt-0.5 shrink-0">
                                    {info.icon}
                                </span>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{info.label}</p>
                                    <p className="text-sm text-white font-medium">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Business hours */}
                    <div className="border-t border-secondary/10 pt-6">
                        <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-3">Business Hours</p>
                        <div className="space-y-1.5 text-sm text-white/50">
                            <div className="flex justify-between max-w-xs">
                                <span>Monday – Friday</span>
                                <span className="text-white/70">9:00 AM – 7:00 PM</span>
                            </div>
                            <div className="flex justify-between max-w-xs">
                                <span>Saturday</span>
                                <span className="text-white/70">10:00 AM – 5:00 PM</span>
                            </div>
                            <div className="flex justify-between max-w-xs">
                                <span>Sunday</span>
                                <span className="text-white/40">Closed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center text-center py-20 border border-secondary/20 gap-5"
                        >
                            <CheckCircle size={48} className="text-secondary" />
                            <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                            <p className="text-white/40 text-sm max-w-xs">
                                Thanks for reaching out. We'll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
                                className="text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors mt-2"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Ahmed Raza"
                                    required
                                    className="bg-white/5 border border-secondary/15 text-white placeholder:text-white/20 text-sm px-4 py-3 outline-none focus:border-secondary/50 transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="ahmed@email.com"
                                    required
                                    className="bg-white/5 border border-secondary/15 text-white placeholder:text-white/20 text-sm px-4 py-3 outline-none focus:border-secondary/50 transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    required
                                    rows={5}
                                    className="bg-white/5 border border-secondary/15 text-white placeholder:text-white/20 text-sm px-4 py-3 outline-none focus:border-secondary/50 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary font-bold text-sm uppercase tracking-widest py-4 transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : (
                                    <>
                                        Send Message
                                        <ArrowUpRight size={16} />
                                    </>
                                )}
                            </button>

                        </form>
                    )}
                </motion.div>
            </section>

        </main>
    )
}