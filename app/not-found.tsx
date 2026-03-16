import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-bgColor flex flex-col items-center justify-center px-6 text-center">

            {/* 404 number */}
            <h1 className="text-[12vw] font-black text-secondary/10 leading-none select-none">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-black text-white -mt-4">
                Page Not Found
            </h2>

            <p className="text-white/40 text-sm mt-4 max-w-sm leading-relaxed">
                Looks like this page stepped out. Let's get you back on track.
            </p>

            <Link
                href="/"
                className="mt-8 flex items-center gap-2 bg-secondary text-primary px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-secondary/80 transition-colors"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </div>
    )
}