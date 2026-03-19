import React, { Suspense } from 'react'
import Header from '../reusable/Header'
import LinkButton from '../reusable/LinkButton'
import { Shoe } from '@/types/Shoe'
import ShoeCard from '../reusable/ShoeCard'

function RelatedShoes({ relatedShoes }: { relatedShoes: Shoe[] }) {

    return (
        <section className='w-full px-6 md:px-24 mt-14'>
            <Header para='' heading1='Related' heading2='Shoes' Button={<LinkButton text='All Shoes' />} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-8">
                <Suspense fallback={
                    <div className="flex justify-center items-center py-32">
                        <div className="w-8 h-8 rounded-full border-2 border-secondary/20 border-t-secondary animate-spin" />
                    </div>
                }>
                    {relatedShoes.map((shoe) => (
                        <ShoeCard key={shoe.id} shoe={shoe} smallHeight={true} />
                    ))}
                </Suspense>
            </div>
        </section>
    )
}

export default RelatedShoes