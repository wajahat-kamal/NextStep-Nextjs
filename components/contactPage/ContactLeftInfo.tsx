"use client"
import React from 'react'
import { motion } from "motion/react"
import { contactInfo } from '@/data/contactInfo'

function ContactLeftInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
        >
            {/* Business hours */}
            <div className="border-t border-secondary/10 pt-3">
                <p className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Business Hours</p>
                <div className="space-y-0.5 text-sm text-white/50">
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

            {/* Contact info cards */}
            <div className="flex flex-col gap-4">
                {contactInfo.map((info) => (
                    <div
                        key={info.label}
                        className="flex items-start gap-4 border border-secondary/15 px-5 py-4 hover:border-secondary/35 transition-colors duration-300 group"
                    >
                        <span className="text-secondary/60 group-hover:text-secondary transition-colors duration-300 mt-0.5 shrink-0">
                            <info.icon size={18} />
                        </span>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{info.label}</p>
                            <p className="text-sm text-white font-medium">{info.value}</p>
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default ContactLeftInfo