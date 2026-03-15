import { Quote, Star } from 'lucide-react'
import React from 'react'
import Header from '../reusable/Header'
import { testimonials } from '@/data/testimonialsData'

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-2 h-2 md:w-4 md:h-4 ${i < rating ? "text-secondary fill-secondary" : "text-white/15"}`}
                />
            ))}
        </div>
    )
}

function StarButton() {
    return (
        <div className="border border-secondary/20 px-4 py-3 flex items-center gap-2 self-start md:self-auto">
            <div>
                <p className="text-md md:text-3xl font-black text-secondary">4.9</p>
                <StarRating rating={5} />
                <p className="text-[6px] md:text-[10px] text-white/30 uppercase tracking-widest mt-1">50K+ reviews</p>
            </div>
            <div className="w-px h-10 md:h-14 bg-secondary/15" />
            <p className="text-[6px] md:text-[10px] text-white/40 max-w-[100px] leading-relaxed">
                Trusted by thousands across Pakistan
            </p>
        </div>
    )
}

function Testimonials() {
    return (
        <section id='testimonials' className="px-6 md:px-24 py-10 ">
            {/* Header */}
            <Header para='Reviews' heading1='What Our' heading2='Customers Say' Button={<StarButton />} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {testimonials.map((t, i) => (
                    <div
                        key={t.id}
                        className="relative flex flex-col gap-4 p-4 border transition-all duration-300 hover:-translate-y-1 group border-secondary/10 bg-white/2 hover:border-secondary/25"
                    >
                        {/* Quote icon */}
                        <Quote
                            size={28}
                            className="text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300"
                        />

                        {/* Stars */}
                        <StarRating rating={t.rating} />

                        {/* Review text */}
                        <p className="text-sm text-white/60 leading-relaxed flex-1">
                            "{t.review}"
                        </p>

                        {/* Purchased tag */}
                        <div className="text-[9px] uppercase tracking-widest text-secondary/50 border-t border-secondary/10 pt-3">
                            Purchased: {t.purchased}
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 bg-secondary text-primary">
                                {t.initial}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{t.name}</p>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest">{t.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials

