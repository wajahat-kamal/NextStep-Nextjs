import { Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/linksData";

function Footer() {
    return (
        <footer className="bg-bgColor border-t border-secondary/30">

            {/* Main Footer Content */}
            <div className="px-6 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo & About */}
                <div className="md:col-span-1">
                    <Link
                        href="/"
                        aria-label="Homepage"
                        className="flex items-center gap-2 text-xl text-white font-mono font-bold tracking-widest hover:opacity-80 transition-opacity"
                    >
                        <Image src={logo} width={36} height={36} alt="NextStep logo" className="w-9 h-9" />
                        <span>NextStep</span>
                    </Link>
                    <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
                        Premium footwear for every walk of life. Comfort, style, and quality — all in one step.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-8">
                        {[
                            { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
                            { icon: <Twitter size={16} />, href: "#", label: "Twitter" },
                            { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
                        ].map(({ icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-secondary border border-secondary/30 transition-colors duration-300"
                                // onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.7)")}
                                // onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.2)")}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        {navLinks.map(({ name, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="group flex items-center gap-1 text-sm text-white/50 hover:text-secondary transition-colors duration-200"
                                >
                                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-secondary">—</span>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                        Stay Updated
                    </h3>
                    <p className="text-sm text-white/50 mb-4">
                        Get new arrivals and exclusive offers straight to your inbox.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 text-sm text-white placeholder:text-white/30 bg-secondary/10 border border-secondary/30  outline-none transition-colors px-4 py-2.5"     
                            // onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.6)")}
                            // onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,211,60,0.2)")}
                        />
                        <button className="bg-secondary hover:bg-secondary/80 text-primary px-4 py-2.5 transition-colors duration-200">
                            <ArrowUpRight size={18} />
                        </button>
                    </div>
                    <p className="text-xs text-white/30 mt-3">No spam. Unsubscribe anytime.</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="px-6 lg:px-24 py-5 flex flex-col md:flex-row justify-between items-center border-t border-secondary/30 gap-3 text-xs text-white/30"
                style={{ borderTop: "1px solid rgba(255,211,60,0.15)" }}
            >
                <p>© {new Date().getFullYear()} NextStep. All rights reserved.</p>
                <p>
                    Made with <span className="text-red-400">♥</span> by{" "}
                    <a
                        href="https://wajahat-kamal.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-secondary transition-colors"
                    >
                        Wajahat Kamal
                    </a>
                </p>
            </div>

        </footer>
    );
}

export default Footer;