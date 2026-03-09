import { Shoe } from '@/types/Shoe'
import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import ShoeCard from '../reusable/ShoeCard'

async function FeaturedShoes() {

    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(rawData)
    const featuredShoes = data.slice(0, 6)
    return (
        <section className="flex justify-center items-center flex-wrap gap-6">
            {featuredShoes.map((shoe: Shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
        </section>
    )
}

export default FeaturedShoes