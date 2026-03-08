import React from 'react'
import logo from "@/assets/logo.png"
import Link from 'next/link'
import Image from 'next/image'

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: "Home", href: "/#hero" },
    { name: "Shopping", href: "/shopping" },
    { name: "About", href: "/#about-us" },
    { name: "Testimonials", href: "/#testimonials" },
];

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
                {navLinks.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className="relative font-mono text-md font-medium text-white transition-colors group"
                    >
                        {name}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar