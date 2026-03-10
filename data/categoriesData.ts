import { Zap, Coffee, Briefcase, Trophy } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export interface Category {
    name: string
    value: string
    description: string
    icon: LucideIcon
}

export const categories: Category[] = [
    {
        name: "Running",
        value: "RUNNING",
        description: "Built for speed, endurance & the open road.",
        icon: Zap,
    },
    {
        name: "Casual",
        value: "CASUAL",
        description: "Everyday comfort meets effortless style.",
        icon: Coffee,
    },
    {
        name: "Formal",
        value: "FORMAL",
        description: "Sharp, refined footwear for every occasion.",
        icon: Briefcase,
    },
    {
        name: "Football",
        value: "FOOTBALL",
        description: "Dominate the pitch with elite performance.",
        icon: Trophy,
    },
]