import { ArrowUpRight, Link, Star } from 'lucide-react'
import React from 'react'
import Header from '../reusable/Header'

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={13}
                    className={i < rating ? "text-secondary fill-secondary" : "text-white/15"}
                />
            ))}
        </div>
    )
}

function Testimonials() {
    return (
        <section id='testimonials' className="bg-primary px-6 md:px-24 py-24 border-t border-secondary/10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2 inline-block px-2 py-0.5 bg-secondary text-primary">
                        Reviews
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-2">
                        What Our{" "}
                        <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                            Customers
                        </span>
                        <br /> Say.
                    </h2>
                </div>

                {/* Overall rating */}
                <div className="border border-secondary/20 px-6 py-4 flex items-center gap-4 self-start md:self-auto">
                    <div>
                        <p className="text-4xl font-black text-secondary">4.9</p>
                        <StarRating rating={5} />
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">50K+ reviews</p>
                    </div>
                    <div className="w-px h-12 bg-secondary/15" />
                    <p className="text-xs text-white/40 max-w-[100px] leading-relaxed">
                        Trusted by thousands across Pakistan
                    </p>
                </div>
            </div>

            <Header para='Reviews' heading1='What Our' heading2='Customers Say' Button={<LinkButton text='view all'/>} />

        </section>
    )
}

export default Testimonials

export function LinkButton({ text }: { text: string }) {
    return (
        <Link
            href="/shopping"
            className="flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold px-2 py-2 md:px-6 md:py-3 transition-all duration-300 shrink-0 border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary"
        >
            {text}
            <ArrowUpRight size={12} />
        </Link>
    )
}