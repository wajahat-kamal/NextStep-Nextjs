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
        <div className="group relative flex flex-col bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

            {/* Image Container */}
            <div
                className="relative w-70 h-40 overflow-hidden bg-[#F5F5F0]"
            >
                {/* Category Badge */}
                <span
                    className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-primary text-secondary"
                >
                    {shoe.category}
                </span>

                {/* Gender Badge */}
                <span
                    className="absolute top-3 right-3 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-white/80 text-zinc-500"
                >
                    {shoe.gender}
                </span>

                {/* Shoe Image */}
                <Image
                    src={shoe.imageUrl}
                    alt={shoe.name}
                    fill
                    // width={100}
                    // height={100}
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay with Quick Actions */}
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={`/shopping/${slug}`}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 transition-colors duration-200  bg-primary text-secondary"
                    >
                        View Details
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 px-4 py-1 gap-1">

                {/* Brand */}
                <span
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary"
                >
                    {shoe.brand}
                </span>

                {/* Name */}
                <h3 className="text-sm font-semibold text-zinc-800 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {shoe.name}
                </h3>

                {/* Price + Cart */}
                <div className="flex items-center justify-between pt-1 border-t border-[#e9e9e9]">
                    <div>
                        <span className="text-xl font-black text-primary">
                            ${shoe.price}
                        </span>
                        <span className="text-xs text-zinc-400 ml-1">USD</span>
                    </div>

                    <button
                        className=" bg-secondary text-primary w-9 h-9 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                        aria-label={`Add ${shoe.name} to cart`}
                    >
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>

            {/* Bottom accent line */}
            <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-secondary"
            />
        </div>
    );
}

export default ShoeCard;