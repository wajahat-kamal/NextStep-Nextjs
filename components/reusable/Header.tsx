import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header({ para, heading1, heading2, button }: { para: string, heading1: string, heading2: string, button: string }) {
    return (
        <div className="flex flex-row justify-between items-center mb-8 gap-4">
            <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-1 inline-block px-2 py-0.5 text-primary bg-secondary">
                    {para}
                </p>
                <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                    {heading1}{" "}
                    <span className="text-transparent"
                        style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                        {heading2}
                    </span>
                </h2>
            </div>

            <Link
                href="/shopping"
                className="flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold px-2 py-2 md:px-6 md:py-3 transition-all duration-300 shrink-0 border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary"
            >
                {button}
                <ArrowUpRight size={12} />
            </Link>
        </div>
    )
}
