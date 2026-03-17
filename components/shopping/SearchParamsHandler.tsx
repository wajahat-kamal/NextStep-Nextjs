"use client"
import { Shoe } from '@/types/Shoe'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import FilterdData from './FilterdData'

function SearchParamsHandler({ allShoes }: { allShoes: Shoe[] }) {
    const searchParams = useSearchParams()
    const searchCategory: string | null = searchParams.get("category")
    return (
        <FilterdData allShoes={allShoes} searchCategory={searchCategory} />
    )
}

export default SearchParamsHandler