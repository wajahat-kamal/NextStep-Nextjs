interface NavLink {
    name: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/about" },
    { name: "Shopping", href: "/shopping" },
    { name: "Testimonials", href: "/#testimonials" },
];