import React from 'react'
import Header from '../reusable/Header'
import LinkButton from '../reusable/LinkButton'
import { Shoe } from '@/types/Shoe'
import ShoeCard from '../reusable/ShoeCard'

function RelatedShoes({ relatedShoes }: { relatedShoes: Shoe[] }) {

    return (
        <section className='w-full px-6 md:px-24 mt-14'>
            <Header para='' heading1='Related' heading2='Shoes' Button={<LinkButton text='All Shoes' />} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-4 md:p-16 md:pt-6">
                {relatedShoes.map((shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} height={true} />
                ))}
            </div>
        </section>
    )
}

export default RelatedShoes