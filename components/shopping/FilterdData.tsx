"use client"
import React, { Suspense, useState } from 'react'
import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';
import { useSearchParams } from 'next/navigation';
import FilterBar from './FilterBar';

interface FilterdDataProps {
    allShoes: Shoe[]
}

function FilterdData({ allShoes }: FilterdDataProps) {

    const searchParams = useSearchParams()
    const searchCategory = searchParams.get("category")

    const [search, setSearch] = useState("")
    const [gender, setGender] = useState("All")
    const [category, setCategory] = useState(searchCategory?.toUpperCase() || "All")

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
        <div className="min-h-screen bg-bgColor">

            {/* Filter Bar — single line */}
            <FilterBar
                search={search}
                setSearch={setSearch}
                gender={gender}
                setGender={setGender}
                category={category}
                setCategory={setCategory}
                visibleCount={visibleShoeCards.length}
                clearAll={clearAll}
            />

            {/* Grid */}
            <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-4 md:p-16 md:pt-6">
                {visibleShoeCards.length > 0 ? (
                    <Suspense fallback={<div className="flex justify-center items-center py-32">
                        <div className="w-8 h-8 rounded-full border-2 border-secondary/20 border-t-secondary animate-spin" />
                    </div>}>
                        {visibleShoeCards.map((shoe) => (
                            <ShoeCard key={shoe.id} shoe={shoe} smallHeight={true} />
                        ))}
                    </Suspense>
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-32 gap-4">
                        <p className="text-5xl">👟</p>
                        <p className="text-white font-bold text-xl">No shoes found</p>
                        <p className="text-white/40 text-sm">Try a different search or filter</p>
                        <button
                            onClick={clearAll}
                            className="mt-2 text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </main>
        </div >
    )
}

export default FilterdData