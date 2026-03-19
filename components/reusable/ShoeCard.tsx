import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Shoe } from "@/types/Shoe";
import AddToCartButton from "./AddToCartButton";

interface ShoeCardProps {
    shoe: Shoe;
    smallHeight: boolean
}

function ShoeCard({ shoe, smallHeight }: ShoeCardProps) {

    return (
        <div className={`group relative w-full ${smallHeight ? "h-50 md:h-65" : "h-70 md:h-90"} aspect-3/4 overflow-hidden cursor-pointer`}>

            <div className="absolute inset-0 bg-[#F6F6F6]" />

            <div className="absolute inset-0 sm:bottom-[25%] bottom-[40%]">
                <Image
                    src={shoe.imageUrl}
                    alt={shoe.name}
                    fill
                    className="object-cover p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>


            <div className="absolute md:top-4 md:left-4 md:right-4 top-2 left-2 right-2 flex justify-between items-start z-10">
                <span
                    className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold px-1 py-0.5 md:px-2.5 md:py-1 bg-secondary text-primary"
                >
                    {shoe.category}
                </span>
                <span
                    className="text-[8px] md:text-[10px] uppercase tracking-widest font-semibold px-1 py-0.5 md:px-2.5 md:py-1"
                    style={{ backgroundColor: "rgba(2,27,65,0.7)", color: "rgba(255,255,255,0.8)" }}
                >
                    {shoe.gender}
                </span>
            </div>

            {/* Bottom Overlay — always visible, expands on hover */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-500 ease-out ${smallHeight ? "pt-4" : "pt-16"}`}
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
                    <h3 className="text-xs md:text-base font-bold text-white leading-snug line-clamp-1">
                        {shoe.name}
                    </h3>

                    {/* Price Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm md:text-2xl font-black text-white">${shoe.price}</span>
                            <span className="text-[8px] md:text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>USD</span>
                        </div>

                        <AddToCartButton shoe={shoe} />
                    </div>

                    {/* View Details — slides in on hover */}
                    <div className="overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-16">
                        <Link
                            href={`/shopping/${shoe.slug}`}
                            className="flex items-center justify-center gap-1 md:gap-2 w-full py-1 md:py-2.5 text-[8px] md:text-xs uppercase tracking-widest text-secondary border border-secondary/30 hover:bg-secondary hover:text-primary font-semibold transition-colors duration-200 md:mt-1"
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