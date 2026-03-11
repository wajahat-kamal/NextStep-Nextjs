import React from 'react'

function CTABanner() {
    return (
        <section className='py-16'>
            <div
                className="mx-6 md:mx-24 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-secondary"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight text-primary">
                        Ready to Take Your <br />Next Step?
                    </h2>
                    <p className="mt-2 text-sm text-black/60" >
                        Browse our full collection and find your perfect pair.
                    </p>
                </div>
                <a
                    href="/shopping"
                    className="bg-primary hover:bg-[#032460] text-secondary px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap"
                >
                    Shop Now
                </a>
            </div>
        </section>
    )
}

export default CTABanner