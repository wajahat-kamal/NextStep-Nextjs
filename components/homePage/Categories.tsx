import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Shoe } from "@/types/Shoe"
import fs from "node:fs/promises"
import path from "node:path"
import { categories } from "@/data/categoriesData"


async function Categories() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(rawData)

    return (
        <section className="bg-bgColor px-6 md:px-24 py-24">

            {/* Header */}
            <div className="flex flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-1 inline-block px-2 py-0.5 text-primary bg-secondary">
                        Browse By
                    </p>
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                        Shop By{" "}
                        <span className="text-transparent"
                            style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                            Category
                        </span>
                    </h2>
                </div>

                <Link
                    href="/shopping"
                    className="flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold px-2 py-2 md:px-6 md:py-3 transition-all duration-300 shrink-0 border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary"
                >
                    All Shoes
                    <ArrowUpRight size={12} />
                </Link>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {categories.map((cat, i) => {
                    const count = allShoes.filter(
                        (s) => s.category === cat.value
                    ).length

                    return (
                        <Link
                            key={cat.value}
                            href={`/shopping?category=${cat.value.toLowerCase()}`}
                            className="group relative overflow-hidden flex flex-col justify-between min-h-56 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                        >
                            {/* Background — alternating */}
                            <div className={`absolute inset-0 transition-all duration-500 ${i % 2 === 0
                                ? "bg-primary group-hover:bg-primary/90"
                                : "bg-secondary group-hover:bg-secondary/90"
                                }`}
                            />

                            {/* Decorative large number */}
                            <span className={`absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-bottom-2 ${i % 2 === 0
                                ? "text-white/5"
                                : "text-primary/10"
                                }`}>
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            {/* Top — emoji + count */}
                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-3xl">{cat.emoji}</span>
                                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 ${i % 2 === 0
                                    ? "bg-secondary/15 text-secondary"
                                    : "bg-primary/15 text-primary"
                                    }`}>
                                    {count} Styles
                                </span>
                            </div>

                            {/* Bottom — name + desc + arrow */}
                            <div className="relative z-10 flex flex-col gap-1.5">
                                <h3 className={`text-2xl font-black tracking-tight ${i % 2 === 0 ? "text-white" : "text-primary"
                                    }`}>
                                    {cat.name}
                                </h3>
                                <p className={`text-xs leading-relaxed line-clamp-2 ${i % 2 === 0
                                    ? "text-white/55"
                                    : "text-primary/60"
                                    }`}>
                                    {cat.description}
                                </p>
                                <div className={`flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold mt-2 w-fit transition-all duration-300 group-hover:gap-2 ${i % 2 === 0 ? "text-secondary" : "text-primary"
                                    }`}>
                                    Shop Now
                                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out ${i % 2 === 0 ? "bg-secondary" : "bg-primary"
                                }`}
                            />
                        </Link>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {categories.map((category) => (
                    <Link key={category.name} href={category.href}>

                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories