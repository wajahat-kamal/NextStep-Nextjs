import { Metadata } from 'next';
import { Shoe } from '@/types/Shoe';
import ShoppingHeroSection from '@/components/shopping/ShoppingHeroSection';
import getData from '@/lib/getData';
import FilterdData from '@/components/shopping/FilterdData';

export const metadata: Metadata = {
    title: "Shopping | NextStep",
    description: "Browse our full collection of premium footwear — Running, Casual, Formal & Football shoes from top brands.",
};

export default async function ShoppingPage() {
    const allShoes: Shoe[] = await getData()

    return (
        <div className="min-h-screen">
            <ShoppingHeroSection />
            <FilterdData allShoes={allShoes} />
        </div>
    )
}