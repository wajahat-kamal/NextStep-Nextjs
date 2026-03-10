interface Category {
    name: string,
    value: string,
    description: string,
    emoji: string
}

export const categories: Category[] = [
    {
        name: "Running",
        value: "RUNNING",
        description: "Built for speed, endurance & the open road.",
        emoji: "🏃",
    },
    {
        name: "Casual",
        value: "CASUAL",
        description: "Everyday comfort meets effortless style.",
        emoji: "👟",
    },
    {
        name: "Formal",
        value: "FORMAL",
        description: "Sharp, refined footwear for every occasion.",
        emoji: "👔",
    },
    {
        name: "Football",
        value: "FOOTBALL",
        description: "Dominate the pitch with elite performance.",
        emoji: "⚽",
    },
]