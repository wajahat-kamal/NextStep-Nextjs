import React from 'react'

function BrandStrip() {
    const brands = ["Nike", "Adidas", "Vans", "Reebok", "Hush Puppies"]
    return (
        <section>
            <div>
                {brands.map((brand) => (
                    <div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BrandStrip