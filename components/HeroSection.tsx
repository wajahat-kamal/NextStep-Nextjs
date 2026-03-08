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
            <div className="relative z-10 h-full flex flex-col justify-center px-16 md:px-24 max-w-5xl">
                {/* Eyebrow label */}
                <span className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium mb-6">
                    New Collection — Spring 2025
                </span>

                {/* Main Heading */}
                <h1 className="text-7xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                    Step Into the <br />
                    <span className="italic font-light text-amber-400">Next Version</span>{" "}
                    of You
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
                    Crafted for those who move with purpose. Explore footwear that blends
                    performance, style, and comfort — built for wherever life takes you next.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300">
                        Shop Now
                    </button>
                    <button className="border border-white/40 hover:border-white text-white px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300">
                        Explore Collection
                    </button>
                </div>

                {/* Stats row */}
                <div className="flex gap-10 mt-16 pt-10 border-t border-white/10">
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
        </section>
    )
}
export default HeroSection