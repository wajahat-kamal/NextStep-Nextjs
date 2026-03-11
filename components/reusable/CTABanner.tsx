import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

function CTABanner() {
    return (
        <section className='py-16 px-6 md:px-24'>
            <div className="relative overflow-hidden bg-secondary p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Decorative background text */}
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[8rem] font-black text-primary/5 select-none pointer-events-none leading-none">
                    NEXTSTEP
                </span>

                {/* Left Content */}
                <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary/50 mb-3">
                        Limited Time
                    </p>
                    <h2 className="text-2xl md:text-4xl font-black leading-tight text-primary">
                        Ready to Take Your <br />Next Step?
                    </h2>
                    <p className="mt-2 text-sm text-primary/60">
                        Browse our full collection and find your perfect pair.
                    </p>
                </div>

                {/* CTA Button */}
                <Link
                    href="/shopping"
                    className="relative z-10 flex items-center gap-2 bg-primary hover:bg-primary/90 text-secondary px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap w-full md:w-auto justify-center"
                >
                    Shop Now
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </section>
    )
}

export default CTABanner