import React from 'react'
import logo from "@/assets/logo.png"
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='absolute top-1 right-0 w-full h-20 z-3 flex flex-row justify-between items-center px-24'>
            <Link
                href="/"
                aria-label="Homepage"
                className="flex items-center gap-2 text-2xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity text-white"
            >
                <Image width={10} height={10} src={logo} alt="Shoeify logo" className="w-10 h-10" />
                <span>NextStep</span>
            </Link>
            <ul>
                <li>Home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </nav>
    )
}

export default Navbar