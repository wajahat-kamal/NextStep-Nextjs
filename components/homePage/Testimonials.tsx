import React from 'react'

function Testimonials() {
    return (
        <section className="bg-primary px-6 md:px-24 py-24 border-t border-secondary/10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2 inline-block px-2 py-0.5 bg-secondary text-primary">
                        Reviews
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-2">
                        What Our{" "}
                        <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,211,60,0.5)" }}>
                            Customers
                        </span>
                        <br /> Say.
                    </h2>
                </div>

                {/* Overall rating */}
                <div className="border border-secondary/20 px-6 py-4 flex items-center gap-4 self-start md:self-auto">
                    <div>
                        <p className="text-4xl font-black text-secondary">4.9</p>
                        {/* <StarRating rating={5} /> */}
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">50K+ reviews</p>
                    </div>
                    <div className="w-px h-12 bg-secondary/15" />
                    <p className="text-xs text-white/40 max-w-[100px] leading-relaxed">
                        Trusted by thousands across Pakistan
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Testimonials