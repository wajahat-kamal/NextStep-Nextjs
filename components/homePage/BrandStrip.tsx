import React from 'react'
import { motion } from 'motion/react'

function BrandStrip() {
    const brands = ["Nike", "Adidas", "Vans", "Reebok", "Hush Puppies"]
    return (
        <section className='w-full h-40 flex justify-center items-center pt-12 pb-32'>
            <div className='flex justify-center items-center flex-row gap-8 w-[85%]'>
                {brands.map((brand, i) => (
                    <div key={brand}
                        className={`p-10 text-3xl font-black tracking-tight ${i % 2 === 0 
                            ? "bg-primary hover:bg-primary/90 text-white"
                            : "bg-secondary hover:bg-secondary/90 text-black"}`}
                    >
                        {brand}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BrandStrip