"use client"
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowUpRight } from "lucide-react";
import { Shoe } from "@/types/Shoe";

interface ShoeCardProps {
    shoe: Shoe;
    height: boolean
}

function ShoeCard({ shoe, height }: ShoeCardProps) {
    const slug = shoe.slug ?? shoe.name.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className={`group relative w-full ${height ? "h-60 md:h-80" : "h-100"} aspect-3/4 overflow-hidden cursor-pointer`}>

            <div className="absolute inset-0 bg-[#F6F6F6]" />

            <Image
                src={shoe.imageUrl}
                alt={shoe.name}
                fill
                className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute md:top-4 md:left-4 md:right-4 top-1 left-1 right-1 flex justify-between items-start z-10">
                <span
                    className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-secondary text-primary"
                >
                    {shoe.category}
                </span>
                <span
                    className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1"
                    style={{ backgroundColor: "rgba(2,27,65,0.7)", color: "rgba(255,255,255,0.8)" }}
                >
                    {shoe.gender}
                </span>
            </div>

            {/* Bottom Overlay — always visible, expands on hover */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-500 ease-out ${height ? "pt-4" : "pt-16"}`}
                style={{
                    background: "linear-gradient(to top, rgba(2,27,65,0.98) 0%, rgba(2,27,65,0.85) 60%, transparent 100%)",
                }}
            >
                <div className="px-2 md:px-5 pb-2 flex flex-col gap-1">

                    {/* Brand */}
                    <div
                        className="text-[7px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-secondary"
                    >
                        <span className="bg-primary/80 py-0.5 px-1 md:py-1 md:px-2">
                            {shoe.brand}
                        </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-1">
                        {shoe.name}
                    </h3>

                    {/* Price Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl md:text-2xl font-black text-white">${shoe.price}</span>
                            <span className="text-[10px] md:text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>USD</span>
                        </div>

                        <button
                            className="bg-secondary text-primary w-6 h-6 md:w-10 md:h-10 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                            style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
                            aria-label={`Add ${shoe.name} to cart`}
                        >
                            <ShoppingCart className="md:w-7 md:h-7 h-4 w-4" />
                        </button>
                    </div>

                    {/* View Details — slides in on hover */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-16">
                        <Link
                            href={`/shopping/${slug}`}
                            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs uppercase tracking-widest text-secondary border border-secondary/30 hover:bg-secondary hover:text-primary font-semibold transition-colors duration-200 mt-1"
                        >
                            View Details
                            <ArrowUpRight size={13} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShoeCard;