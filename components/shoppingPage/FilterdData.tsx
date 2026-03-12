"use client"
import React, { useState } from 'react'
import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';
import { Search, X } from 'lucide-react';
import { genders } from '@/data/shoppinPageData';
import { categories } from '@/data/categoriesData';

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

    const hasActiveFilters = search !== "" || gender !== "All" || category !== "All"

    return (
        <div className="min-h-screen bg-primary">

            {/* Filter Bar — single line */}
            <section className="sticky top-0 z-30 bg-primary border-b border-secondary/10 px-4 md:px-16 py-4">
                <div className="flex flex-wrap justify-between items-center gap-2">

                    {/* Search */}
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-white/5 border border-secondary/15 text-white placeholder:text-white/30 text-xs md:text-sm py-2 pl-8 pr-7 outline-none focus:border-secondary/50 transition-colors w-36 md:w-100"
                            type="text"
                            placeholder="Search shoes..."
                        />
                        {search && (
                            <button onClick={() => setSearch("")} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-secondary/15" />

                    {/* Gender */}
                    <div>
                        {genders.map((value) => (
                            <button
                                key={value}
                                onClick={() => setGender(value)}
                                className={`text-[10px] uppercase tracking-wider font-semibold md:text-sm px-3 py-2 transition-all duration-200 cursor-pointer ${gender === value
                                    ? "bg-secondary text-primary"
                                    : "text-white/50 border border-white/10 hover:border-secondary/40 hover:text-white"
                                    }`}
                            >
                                {value}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-secondary/15" />

                    {/* Category */}
                    <div>
                        {categories.map((value) => (
                            <button
                                key={value}
                                onClick={() => setCategory(value)}
                                className={`text-[10px] uppercase tracking-wider font-semibold md:text-xs px-3 py-2 transition-all duration-200 cursor-pointer ${category === value
                                    ? "bg-secondary text-primary"
                                    : "text-white/50 border border-white/10 hover:border-secondary/40 hover:text-white"
                                    }`}
                            >
                                {value}
                            </button>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-secondary/15" />

                    {/* Result count + Clear */}
                    <div className="flex items-center gap-2">
                        <span className="text-white/30 text-[10px]">
                            {visibleShoeCards.length} results
                        </span>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAll}
                                className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-secondary/60 hover:text-secondary transition-colors cursor-pointer"
                            >
                                <X size={11} /> Clear
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-4 md:p-16 md:pt-6">
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
                            className="mt-2 text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
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