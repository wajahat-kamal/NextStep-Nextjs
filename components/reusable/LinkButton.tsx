import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function LinkButton({ text }: { text: string }) {
    return (
        <Link
            href="/shopping"
            className="flex items-center gap-1 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider font-semibold px-2 py-2 md:px-6 md:py-3 transition-all duration-300 shrink-0 border border-secondary/50 text-secondary hover:bg-secondary hover:text-primary"
        >
            {text}
            <ArrowUpRight size={12} />
        </Link>
    )
}

export default LinkButton