import React from 'react'
import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';

async function FilterdData() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(rawData)
    return (
        <div>
            <section className='w-full h-25 px-6 md:px-16 flex md:flex-row flex-col items-center justify-between gap-4'>
                <input className='placeholder-gray-600 w-[43%] rounded bg-amber-50 py-2 px-4' type="text" placeholder='Search your favrit shoe' />
                <div className='flex justify-center items-center flex-row gap-2'>
                    {["Mens", "Womens", "Kids"].map((button, i) => (
                        <button key={button + i}
                            className='bg-amber-50 px-4 py-2 rounded text-gray-600 cursor-pointer'
                        >{button}</button>
                    ))}
                </div>
                <div className='flex justify-center items-center flex-row gap-2'>
                    {["Formal", "Casual", "Football", "Running"].map((button, i) => (
                        <button key={button + i}
                            className='bg-amber-50 px-4 py-2 rounded text-gray-600 cursor-pointer'
                        >{button}</button>
                    ))}
                </div>
            </section>

            <main className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 p-6 md:p-16 md:pt-4'>
                {allShoes.map((shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} height={true} />
                ))}
            </main>
        </div>
    )
}

export default FilterdData