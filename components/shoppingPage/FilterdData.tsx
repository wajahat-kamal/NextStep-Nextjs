"use client"
import React, { useState } from 'react'
import ShoeCard from '@/components/reusable/ShoeCard';
import { Shoe } from '@/types/Shoe';

interface FilterdDataProps {
    allShoes: Shoe[]
}

function FilterdData({ allShoes }: FilterdDataProps) {
    const [search, setSearch] = useState("")
    const [gender, setGender] = useState("All")
    const [category, setCategory] = useState("All")

    const searchData = allShoes.filter((shoe) => {
      if (search === "") {
        return shoe;
      }  

      const searchMatch = shoe.name.toLowerCase().includes(search.toLowerCase())
      return searchMatch
    })

    const filteredData = searchData().filter((shoe) => {
        const genderMatch = gender === "All" || shoe.gender === gender
        const categoryMatch = category === "All" || shoe.category === category
        return genderMatch && categoryMatch
    })

    return (
        <div>
            <section className='w-full h-25 px-6 md:px-16 flex md:flex-row flex-col items-center justify-between gap-4'>
                <input onChange={(e) => setSearch(e.target.value)} className='placeholder-gray-600 w-[40%] rounded bg-amber-50 py-2 px-4' type="text" placeholder='Search your favrit shoe' />
                <div className='flex justify-center items-center flex-row gap-2'>
                    {["All", "MEN", "WOMEN", "KIDS"].map((value, i) => (
                        <button key={value + i}
                            onClick={(): void => setGender(value)}
                            className='bg-amber-50 px-4 py-2 rounded text-gray-600 cursor-pointer'
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
                {filteredData.length > 0 ? (
                    filteredData.map((shoe) => (
                        <ShoeCard key={shoe.id} shoe={shoe} height={true} />
                    ))
                ) : (
                    <div>No Shoe Avalible in this Category</div>
                )}
            </main>
        </div>
    )
}

export default FilterdData