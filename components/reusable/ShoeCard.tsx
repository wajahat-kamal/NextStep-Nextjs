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
        <div className={`group relative w-full ${height ? "h-80" : "h-110"} aspect-3/4 overflow-hidden cursor-pointer`}>

            <div className="absolute inset-0 bg-[#F6F6F6]" />

            <Image
                src={shoe.imageUrl}
                alt={shoe.name}
                fill
                className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
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
                <div className="px-5 pb-2 flex flex-col gap-1">

                    {/* Brand */}
                    <span
                        className="text-[10px] uppercase tracking-[0.35em] font-bold text-secondary"
                    >
                        {shoe.brand}
                    </span>

                    {/* Name */}
                    <h3 className="text-base font-bold text-white leading-snug line-clamp-1">
                        {shoe.name}
                    </h3>

                    {/* Price Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white">${shoe.price}</span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>USD</span>
                        </div>

                        <button
                            className="bg-secondary text-primary w-10 h-10 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                            style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
                            aria-label={`Add ${shoe.name} to cart`}
                        >
                            <ShoppingCart size={16} />
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