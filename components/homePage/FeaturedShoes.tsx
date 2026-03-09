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
        <section className="px-6 md:px-24 py-18 bg-bgColor">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-0 inline-block px-3 py-1 text-primary bg-secondary">
                        New Arrivals
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Featured {" "}
                        <span className="text-transparent"
                            style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                            Collection
                        </span>
                    </h2>
                </div>
                <Link
                    href="/shopping"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 transition-all duration-300 self-start md:self-auto border-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-primary"
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