import { ArrowUpRight, Star } from 'lucide-react'
import React from 'react'
import Header from '../reusable/Header'
import Link from 'next/link'
import LinkButton from '../reusable/LinkButton'

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

function StarButton() {
    return (
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
    )
}

function Testimonials() {
    return (
        <section id='testimonials' className="px-6 md:px-24 py-18 ">

            {/* Header */}
            <Header para='Reviews' heading1='What Our' heading2='Customers Say' Button={<StarButton />} />

        </section>
    )
}

export default Testimonials

