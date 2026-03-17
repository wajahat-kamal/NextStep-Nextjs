import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Shoe } from "@/types/Shoe"
import fs from "node:fs/promises"
import path from "node:path"
import { categories } from "@/data/categoriesData"
import Header from "../reusable/Header"
import LinkButton from "../reusable/LinkButton"


async function Categories() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(rawData)

    return (
        <section className="bg-bgColor px-6 md:px-24 py-24">

            <Header para="Browse By" heading1="Shop By" heading2="Category" Button={<LinkButton text="All Shoes"/>} />

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categories.map((category, i) => {
                    const count = allShoes.filter((shoe) => (
                        shoe.category === category.value
                    )).length
                    const Icon = category.icon
                    return (
                        <Link
                            key={category.name}
                            href={`/shopping?category=${category.value.toLowerCase()}`}
                            className="group relative overflow-hidden flex flex-col justify-between min-h-56 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                        >
                            <div className={`absolute inset-0 transition-all duration-500 ${i % 2 === 0
                                ? "bg-primary group-hover:bg-primary/90"
                                : "bg-secondary group-hover:bg-secondary/90"
                                }`}
                            />

                            <span className={`absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-bottom-2 ${i % 2 === 0
                                ? "text-white/5"
                                : "text-primary/10"
                                }`}>
                                0{String(i + 1)}
                            </span>

                            <div className="relative z-10 flex justify-between items-start">
                                {/* <span className="text-3xl">{category.emoji}</span> */}
                                <span className={i % 2 === 0 ? "text-secondary" : "text-primary"}>
                                    <Icon size={28} />
                                </span>
                                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-primary/15 text-primary ${i % 2 === 0
                                    ? "bg-secondary/15 text-secondary"
                                    : "bg-primary/15 text-primary"
                                    }`} >
                                    {count} Styles
                                </span>
                            </div>

                            <div className="relative z-10 flex flex-col gap-1.5">
                                <h3 className={`text-2xl font-black tracking-tight ${i % 2 === 0 ? "text-white" : "text-primary"
                                    }`}>
                                    {category.name}
                                </h3>
                                <p className={`text-xs leading-relaxed line-clamp-2 ${i % 2 === 0
                                    ? "text-white/55"
                                    : "text-primary/60"
                                    }`}>
                                    {category.description}
                                </p>
                                <div className={`flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold mt-2 w-fit transition-all duration-300 group-hover:gap-2 ${i % 2 === 0 ? "text-secondary" : "text-primary"
                                    }`}>
                                    Shop Now
                                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                            <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out ${i % 2 === 0 ? "bg-secondary" : "bg-primary"
                                }`}
                            />
                        </Link>
                    )
                })}
            </div>
        </section >
    )
}

export default Categories
