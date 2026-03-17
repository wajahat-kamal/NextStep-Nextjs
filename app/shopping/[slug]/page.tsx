import { Shoe } from '@/types/Shoe';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Tag, Users } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import getData from '@/lib/getData';
import ShoeDetailPageButtons from '@/components/shoe-detail/ShoeDetailPageButtons';
import RelatedShoes from '@/components/shoe-detail/RelatedShoes';
import MainContent from '@/components/shoe-detail/MainContent';

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const allShoes: Shoe[] = await getData()
  const shoe = allShoes.find((s) => s.slug === slug)

  return {
    title: shoe ? `${shoe.name} | NextStep` : "Shoe Not Found | NextStep",
  }
}

async function CardDetailPage({ params }: Props) {
  const { slug } = await params
  const allShoes: Shoe[] = await getData()
  const shoe = allShoes.find((s) => s.slug === slug)

  if (!shoe) return notFound()

  const relatedShoes = allShoes.filter((s) => s.category === shoe.category)

  return (
    <div className="min-h-screen bg-bgColor">

      {/* Back button */}
      <div className="px-4 md:px-22 pt-24 pb-1">
        <Link
          href="/shopping"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-secondary transition-colors duration-200"
        >
          <ArrowLeft size={13} />
          Back to Shopping
        </Link>
      </div>

      {/* Main Content */}
      <MainContent shoe={shoe} />
      {/* Related Shoes */}
      <RelatedShoes relatedShoes={relatedShoes} />
    </div>
  )
}

export default CardDetailPage