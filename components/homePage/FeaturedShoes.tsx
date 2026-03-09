import { Shoe } from '@/types/Shoe'
import fs from 'node:fs/promises'
import path from 'node:path'
import ShoeCard from '../reusable/ShoeCard'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

async function FeaturedShoes() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const data: Shoe[] = JSON.parse(rawData)
    const featuredShoes = data.slice(0, 6)

    return (
        <section className="px-6 md:px-24 py-24 bg-[#F7F6F2]">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] font-semibold text-secondary bg-primary inline-block px-3 py-1 mb-4">
                        New Arrivals
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                        Featured <br className="hidden md:block" />
                        <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #021B41" }}>
                            Collection
                        </span>
                    </h2>
                </div>
                <Link
                    href="/shopping"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 self-start md:self-auto"
                >
                    View All
                    <ArrowUpRight size={14} />
                </Link>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredShoes.map((shoe: Shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} />
                ))}
            </div>

        </section>
    )
}

export default FeaturedShoes