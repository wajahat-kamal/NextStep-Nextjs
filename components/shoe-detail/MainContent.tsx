import { Shoe } from '@/types/Shoe'
import { Tag, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ShoeDetailPageButtons from './ShoeDetailPageButtons'

function MainContent({shoe}: {shoe: Shoe}) {
    return (
        <section className="px-4 md:px-24 py-4 grid md:grid-cols-2 gap-4 lg:gap-0 items-center">

            {/* Image Side */}
            <div className="relative">
                {/* Image container */}
                <div className="h-70 md:h-120 relative w-[97%] md:w-[85%] aspect-square bg-white/5 border border-secondary/10 overflow-hidden">

                    <span className="absolute top-4 left-4.5 z-10 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-secondary text-primary">
                        {shoe.category}
                    </span>

                    <span className="absolute top-4 right-4.5 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-primary/60 text-white/70 border border-white/10">
                        {shoe.gender}
                    </span>

                    <Image
                        src={shoe.imageUrl}
                        alt={shoe.name}
                        fill
                        className="object-contain p-4"
                        priority
                    />
                </div>

            </div>

            {/* Info Side */}
            <div className="flex flex-col md:gap-4 gap-2">

                {/* Brand */}
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary/70">
                        {shoe.brand}
                    </span>
                </div>

                {/* Name */}
                <h1 className="text-2xl md:text-5xl font-black text-white leading-tight">
                    {shoe.name}
                </h1>

                {/* Divider */}
                <div className="h-px bg-secondary/10" />

                {/* Meta info */}
                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 border border-secondary/15 px-3 py-2">
                        <Tag size={12} className="text-secondary/60" />
                        <span className="text-[10px] uppercase tracking-widest text-white/50">{shoe.category}</span>
                    </div>
                    <div className="flex items-center gap-2 border border-secondary/15 px-3 py-2">
                        <Users size={12} className="text-secondary/60" />
                        <span className="text-[10px] uppercase tracking-widest text-white/50">{shoe.gender}</span>
                    </div>
                </div>

                {/* Price */}
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Price</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-5xl font-black text-white">${shoe.price}</span>
                        <span className="text-sm text-white/30">USD</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-secondary/10" />

                {/* Actions */}
                <ShoeDetailPageButtons shoe={shoe} />

                {/* Bottom note */}
                <p className="text-[10px] text-white/20 uppercase tracking-widest">
                    ✓ Free delivery &nbsp;·&nbsp; ✓ Easy returns &nbsp;·&nbsp; ✓ Authentic guarantee
                </p>
            </div>
        </section>
    )
}

export default MainContent