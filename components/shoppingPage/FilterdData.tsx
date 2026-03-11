"use client"
import React, { useState } from 'react'
import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';
import { X } from 'lucide-react';

interface FilterdDataProps {
    allShoes: Shoe[]
}

function FilterdData({ allShoes }: FilterdDataProps) {
    const [search, setSearch] = useState("")
    const [gender, setGender] = useState("All")
    const [category, setCategory] = useState("All")

    const visibleShoeCards = allShoes.filter((shoe) => {
        const searchMatch = search === "" || shoe.name.toLowerCase().includes(search.toLowerCase())
        const genderMatch = gender === "All" || shoe.gender === gender
        const categoryMatch = category === "All" || shoe.category === category
        return searchMatch && genderMatch && categoryMatch
    })

    const clearAll = () => {
        setSearch("")
        setGender("All")
        setCategory("All")
    }

    return (
        <div>
            <section className='w-full h-25 px-6 md:px-16 flex md:flex-row flex-col items-center justify-between gap-4'>
                <div className='relative w-[40%]'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='placeholder-gray-600 w-full rounded bg-amber-50 py-2 px-4' type="text" placeholder='Search your favrit shoe' />
                    <button onClick={() => setSearch("")} className='absolute right-1 top-2'>
                        <X />
                    </button>
                </div>
                <div className='flex justify-center items-center flex-row gap-2'>
                    {["All", "MEN", "WOMEN", "KIDS"].map((value, i) => (
                        <button key={value + i}
                            onClick={(): void => setGender(value)}
                            className={`bg-amber-50 px-4 py-2 rounded text-gray-600 cursor-pointer ${value === gender && "bg-secondary"}`}
                        >{value}</button>
                    ))}
                </div>
                <div className='flex justify-center items-center flex-row gap-2'>
                    {["All", "FORMAL", "CASUAL", "FOOTBALL", "RUNNING"].map((value, i) => (
                        <button key={value + i}
                            onClick={(): void => setCategory(value)}
                            className='bg-amber-50 px-4 py-2 rounded text-gray-600 cursor-pointer'
                        >{value}</button>
                    ))}
                </div>
            </section>

            <main className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 p-6 md:p-16 md:pt-4'>
                {visibleShoeCards.length > 0 ? (
                    visibleShoeCards.map((shoe) => (
                        <ShoeCard key={shoe.id} shoe={shoe} height={true} />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-32 gap-4">
                        <p className="text-5xl">👟</p>
                        <p className="text-white font-bold text-xl">No shoes found</p>
                        <p className="text-white/40 text-sm">Try a different search or filter</p>
                        <button
                            onClick={clearAll}
                            className="mt-2 text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default FilterdData