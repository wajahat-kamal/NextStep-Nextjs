"use client"
import React from 'react'
import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import axios from "axios"

function ContactRightInfo() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.name ||!form.email || !form.message) return;
        setLoading(true)
        try {
            const response = await axios.post("https://api.web3forms.com/submit", {
                access_key: process.env.WEB3FORM_KEY,
                name: form.name,
                email: form.email,
                message: form.message,
                subject: "New Contact Message From NextStep",
                from_name: form.name,
              })
        } catch (error) {
            
        }
    }
    return (
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
                        className="text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors mt-2"
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
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
                        className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary font-bold text-sm uppercase tracking-widest py-4 transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        type='submit'
                        disabled={loading}
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
    )
}

export default ContactRightInfo