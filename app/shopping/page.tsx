import { Metadata } from 'next';
import { Shoe } from '@/types/Shoe';
import ShoppingHeroSection from '@/components/shopping/ShoppingHeroSection';
import getData from '@/lib/getData';
import FilterdData from '@/components/shopping/FilterdData';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: "Shopping | NextStep",
    description: "Browse our full collection of premium footwear — Running, Casual, Formal & Football shoes from top brands.",
};

export default async function ShoppingPage() {
    const allShoes: Shoe[] = await getData()

    return (
        <div className="min-h-screen">
            <ShoppingHeroSection />

            <Suspense fallback={
                <div className="flex justify-center items-center py-32">
                    <p className="text-white/40 text-sm uppercase tracking-widest">Loading...</p>
                </div>
            }>
                <FilterdData allShoes={allShoes} />
            </Suspense>
        </div >
    )
}