import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logo.png"
import cartImage from "@/assets/cart-image.png"
import { Menu, X } from 'lucide-react'

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
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='absolute top-1 right-0 w-full h-20 z-3 flex flex-row justify-between items-center px-16 md:px-24'>
            <Link
                href="/"
                aria-label="Homepage"
                className="flex items-center gap-2 text-2xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity text-white"
            >
                <Image width={10} height={10} src={logo} alt="Shoeify logo" className="w-10 h-10" />
                <span>NextStep</span>
            </Link>
            <div className='hidden md:flex flex-row justify-center items-center gap-4'>
                <ul className='flex gap-8'>
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
                <button className='border-l border-zinc-500/60'>
                    <Image className='ml-4 cursor-pointer' width={30} height={30} alt='Cart Icon' src={cartImage} />
                </button>
            </div>
            <div className='md:hidden block'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden text-gray-200 hover:text-white transition-colors"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar