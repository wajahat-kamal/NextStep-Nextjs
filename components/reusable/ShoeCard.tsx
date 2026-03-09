import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowUpRight } from "lucide-react";
import { Shoe } from "@/types/Shoe";

interface ShoeCardProps {
    shoe: Shoe;
}

function ShoeCard({ shoe }: ShoeCardProps) {
    const slug = shoe.slug ?? shoe.name.toLowerCase().replace(/\s+/g, "-");

    return (
        <div
            className="group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
            style={{
                backgroundColor: "#032460",
                border: "1px solid rgba(255,211,60,0.1)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
            }}
            // onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.35)")}
            // onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.1)")}
        >
            {/* Image Container */}
            <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
                {/* Category Badge */}
                <span
                    className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1"
                    style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
                >
                    {shoe.category}
                </span>

                {/* Gender Badge */}
                <span
                    className="absolute top-3 right-3 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                >
                    {shoe.gender}
                </span>

                {/* Shoe Image */}
                <Image
                    src={shoe.imageUrl}
                    alt={shoe.name}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(2,27,65,0.4)" }}
                />

                {/* View Details Button - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                        href={`/shopping/${slug}`}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 transition-colors duration-200"
                        style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
                    >
                        View Details
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 px-4 py-4 gap-2">

                {/* Brand */}
                <span
                    className="text-[10px] uppercase tracking-[0.3em] font-bold"
                    style={{ color: "rgba(255,211,60,0.6)" }}
                >
                    {shoe.brand}
                </span>

                {/* Name */}
                <h3
                    className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 min-h-[2.5rem]"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                >
                    {shoe.name}
                </h3>

                {/* Price + Cart */}
                <div
                    className="flex items-center justify-between pt-3 mt-auto"
                    style={{ borderTop: "1px solid rgba(255,211,60,0.1)" }}
                >
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white">
                            ${shoe.price}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>USD</span>
                    </div>

                    <button
                        className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                        style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
                        aria-label={`Add ${shoe.name} to cart`}
                    >
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>

            {/* Bottom accent line */}
            <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ backgroundColor: "#FFD33C" }}
            />
        </div>
    );
}

export default ShoeCard;