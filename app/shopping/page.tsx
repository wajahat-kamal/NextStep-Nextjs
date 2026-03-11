import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';
import { Metadata } from 'next';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react'

export const metadata: Metadata = {
    title: "Shopping | NextStep",
    description: "",
};

export default async function ShoppingPage() {

    const filePath = path.join(process.cwd(), "data", "ShoeData.json") 
    const rawData = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(rawData)

    return (
        <div className='min-h-screen'>
            <header className='bg-primary w-full h-75 flex justify-center items-center'>
                <h1 className='text-white text-7xl'>Shopping</h1>
            </header>

            {/* filters */}
            <div>

            </div>

            <main className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-16'>
                {allShoes.map((shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} height={true}/>
                ))}
            </main>
        </div>
    )
}

