import { Shoe } from '@/types/Shoe'
import ShoeCard from '../reusable/ShoeCard'
import Header from '../reusable/Header'
import getData from '@/lib/getData'

async function FeaturedShoes() {
    const data: Shoe[] = await getData()
    const featuredShoes = data.slice(0, 6)

    return (
        <section className="px-6 md:px-24 py-18 bg-bgColor">

            <Header para='New Arrivals' heading1='Featured' heading2='Collection' button='View All' />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredShoes.map((shoe: Shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} height={false} />
                ))}
            </div>

        </section>
    )
}

export default FeaturedShoes