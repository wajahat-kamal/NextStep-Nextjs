"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logo.png"
import cartImage from "@/assets/cart-image.png"
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from "motion/react"
import { navLinks } from '@/data/linksData'
import { useDispatch } from 'react-redux'
import { openCart } from '@/store/cart/cartSlice'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 right-0 w-full h-20 z-30 flex flex-row justify-between items-center px-4 md:px-24 transition-all duration-300 ${scrolled ? "bg-bgColor shadow-lg" : "bg-transparent"}`}>
            <Link
                href="/"
                aria-label="Homepage"
                className="flex items-center gap-2 text-2xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity text-white"
            >
                <Image width={10} height={10} src={logo} alt="Shoeify logo" className="w-10 h-10 rounded-full" />
                <span>NextStep</span>
            </Link>
            <div className='hidden md:flex flex-row justify-center items-center gap-4'>
                <ul className='flex gap-6'>
                    {navLinks.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                className="relative font-mono text-sm font-medium text-white transition-colors group"
                            >
                                {name}
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='border-l border-zinc-500/60' onClick={() => dispatch(openCart())}>
                    <Image className='ml-4 cursor-pointer' width={30} height={30} alt='Cart Icon' src={cartImage} />
                </button>
            </div>
            <div className='md:hidden flex justify-center items-center flex-row gap-2'>
                <button onClick={() => dispatch(openCart())}>
                    <Image className='cursor-pointer' width={30} height={30} alt='Cart Icon' src={cartImage} />
                </button>
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="text-gray-200 hover:text-white transition-colors"
                >
                    <Menu size={30} />
                </button>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        id="mobile-menu"
                        className="fixed top-0 right-0 z-50 h-screen bg-primary w-60 md:hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end text-white mb-4 w-full absolute top-7 left-50"
                        >
                            <X size={30} />
                        </button>
                        <div className="flex flex-col gap-3 px-4 pt-16">
                            {navLinks.map(({ name, href }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md px-3 py-2 text-md font-medium text-gray-200 hover:text-white hover:bg-white/10 transition"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar