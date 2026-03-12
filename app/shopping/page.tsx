import FilterdData from '@/components/shoppingPage/FilterdData';
import { Metadata } from 'next';
import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';
import ShoppingHeroSection from '@/components/shoppingPage/ShoppingHeroSection';

export const metadata: Metadata = {
    title: "Shopping | NextStep",
    description: "Browse our full collection of premium footwear — Running, Casual, Formal & Football shoes from top brands.",
};

export default async function ShoppingPage() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const rawData = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(rawData)

    return (
        <div className="min-h-screen bg-primary">
            <ShoppingHeroSection allShoes={allShoes}/>
            <FilterdData allShoes={allShoes} />
        </div>
    )
}