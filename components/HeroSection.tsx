import Image from 'next/image'
import bgImage from "@/assets/main-bg-image.jpg"

function HeroSection() {
    return (
        <section id="hero" className="relative h-screen w-full">
            <Image
                src={bgImage}
                alt="Hero background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-1" />

            {/* Content */}
            <div className="relative z-2 h-full flex flex-col justify-center px-4 md:px-24">
                <div className="max-w-2xl">
                    <span className="text-xs md:text-sm uppercase md:tracking-[0.3em] text-primary font-medium mb-4 block">
                        New Collection — Spring 2026
                    </span>

                    <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                        Step Into the <br />
                        <span className="italic font-light text-primary">Next Version</span>{" "}
                        of You
                    </h1>

                    <p className="text-xs md:text-lg text-white/70 max-w-[290px] md:max-w-xl leading-relaxed mb-4">
                        Crafted for those who move with purpose. Explore footwear that blends
                        performance, style, and comfort — built for wherever life takes you next.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="bg-primary hover:bg-primary/70 text-white cursor-pointer font-semibold p-4 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300">
                            Shop Now
                        </button>
                        <button className="border border-white/40 hover:border-primary hover:text-primary cursor-pointer text-white p-4 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest transition-all duration-300">
                            Explore Collection
                        </button>
                    </div>

                    <div className="flex gap-10 mt-4 pt-2 border-t border-white/10">
                        {[
                            { value: "500+", label: "Styles" },
                            { value: "50+", label: "Brands" },
                            { value: "4.9★", label: "Rated" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection