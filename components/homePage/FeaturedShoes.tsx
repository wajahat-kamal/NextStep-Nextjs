import { Shoe } from '@/types/Shoe'
import fs from 'node:fs/promises'
import path from 'node:path'
import ShoeCard from '../reusable/ShoeCard'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Header from '../reusable/Header'

async function FeaturedShoes() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const data: Shoe[] = JSON.parse(rawData)
    const featuredShoes = data.slice(0, 6)

    return (
        <section className="px-6 md:px-24 py-18 bg-bgColor">

            <Header para='New Arrivals' heading1='Featured' heading2='Collection' button='View All' />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredShoes.map((shoe: Shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} height={false} />
                ))}
            </div>

        </section>
    )
}

export default FeaturedShoes