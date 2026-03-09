import { Shoe } from '@/types/Shoe'
import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import ShoeCard from '../reusable/ShoeCard'

async function FeaturedShoes() {

    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(rawData)
    return (
        <section>
            {data.map((shoe: Shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
        </section>
    )
}

export default FeaturedShoes