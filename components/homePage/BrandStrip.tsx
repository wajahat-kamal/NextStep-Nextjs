import React from 'react'

function BrandStrip() {
    const brands = ["Nike", "Adidas", "Vans", "Reebok", "Hush Puppies"]
    return (
        <section className='w-full h-40 bg-amber-50 flex justify-center items-center p-16'>
            <div className='flex justify-center items-center flex-row gap-8'>
                {brands.map((brand, i) => (
                    <div key={brand}
                        className={`p-12 text-3xl ${i % 2 === 0 
                            ? "bg-primary group-hover:bg-primary/90"
                            : "bg-secondary group-hover:bg-secondary/90"}`}
                    >
                        {brand}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BrandStrip