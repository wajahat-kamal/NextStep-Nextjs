interface Category {
    name: string,
    value: string,
    description: string,
    emoji: string
    href: string
}

export const categories: Category[] = [
    {
        name: "Running",
        value: "RUNNING",
        description: "Built for speed, endurance & the open road.",
        emoji: "🏃",
        href: "/shopping?category=running"
    },
    {
        name: "Casual",
        value: "CASUAL",
        description: "Everyday comfort meets effortless style.",
        emoji: "👟",
        href: "/shopping?category=casual"
    },
    {
        name: "Formal",
        value: "FORMAL",
        description: "Sharp, refined footwear for every occasion.",
        emoji: "👔",
        href: "/shopping?category=formal"
    },
    {
        name: "Football",
        value: "FOOTBALL",
        description: "Dominate the pitch with elite performance.",
        emoji: "⚽",
        href: "/shopping?category=footbaal"
    },
]