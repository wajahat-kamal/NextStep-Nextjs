interface NavLink {
    name: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { name: "Home", href: "/#hero" },
    { name: "Shopping", href: "/shopping" },
    { name: "About", href: "/#about-us" },
    { name: "Testimonials", href: "/#testimonials" },
];