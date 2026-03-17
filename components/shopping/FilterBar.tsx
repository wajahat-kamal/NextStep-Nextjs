"use client"
import React from "react"
import { Search, X } from "lucide-react"
import { genders, shoppingPagecategories } from "@/data/shoppinPageData"

interface FilterBarProps {
    search: string
    setSearch: (value: string) => void
    gender: string
    setGender: (value: string) => void
    category: string
    setCategory: (value: string) => void
    visibleCount: number
    clearAll: () => void
    hasActiveFilters: boolean
}

function FilterBar({
    search,
    setSearch,
    gender,
    setGender,
    category,
    setCategory,
    visibleCount,
}: FilterBarProps) {

    const clearAll = () => {
        setSearch("")
        setGender("All")
        setCategory("All")
    }

    const hasActiveFilters = search !== "" || gender !== "All" || category !== "All"

    return (
        <section className="sticky top-19.5 z-30 bg-bgColor border-b border-secondary/10 px-4 md:px-16 md:py-4 py-2">
            <div className="flex flex-wrap justify-between items-center gap-2">

                {/* Search */}
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white/5 border border-secondary/15 text-white placeholder:text-white/30 text-xs md:text-sm py-2 pl-8 pr-7 outline-none focus:border-secondary/50 transition-colors w-71 md:w-100"
                        type="text"
                        placeholder="Search shoes..."
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-secondary/15 md:block hidden" />

                {/* Category */}
                <div>
                    {shoppingPagecategories.map((value) => (
                        <button
                            key={value}
                            onClick={() => setCategory(value)}
                            className={`text-[10px] uppercase tracking-wider font-semibold md:text-xs p-1.5 md:px-3 md:py-2 transition-all duration-200 cursor-pointer ${category === value
                                    ? "bg-secondary text-primary"
                                    : "text-white/50 border border-white/10 hover:border-secondary/40 hover:text-white"
                                }`}
                        >
                            {value}
                        </button>
                    ))}
                </div>

                <div className="h-6 w-px bg-secondary/15 md:block hidden" />

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

                <div className="h-6 w-px bg-secondary/15 md:block hidden" />

                {/* Result + Clear */}
                <div className="flex items-center gap-2">
                    <span className="text-white/30 text-[10px]">
                        {visibleCount} results
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
    )
}

export default FilterBar