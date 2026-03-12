import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Tag, Users } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "data", "ShoeData.json")
  const raw = await fs.readFile(filePath, "utf8")
  const allShoes: Shoe[] = JSON.parse(raw)
  const shoe = allShoes.find((s) => s.slug === slug)

  return {
    title: shoe ? `${shoe.name} | NextStep` : "Shoe Not Found | NextStep",
  }
}

async function CardDetailPage({ params }: Props) {
  const { slug } = await params

  const filePath = path.join(process.cwd(), "data", "ShoeData.json")
  const rawData = await fs.readFile(filePath, "utf8")
  const allShoes: Shoe[] = JSON.parse(rawData)
  const shoe = allShoes.find((s) => s.slug === slug)

  if (!shoe) return notFound()

  return (
    <div className="min-h-screen bg-bgColor">

      {/* Back button */}
      <div className="px-6 md:px-22 pt-24 pb-2">
        <Link
          href="/shopping"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-secondary transition-colors duration-200"
        >
          <ArrowLeft size={13} />
          Back to Shopping
        </Link>
      </div>

      {/* Main Content */}
      <section className="px-6 md:px-24 py-4 grid md:grid-cols-2 gap-12 lg:gap-0 items-center">

        {/* Image Side */}
        <div className="relative">
          {/* Image container */}
          <div className="h-120 relative w-[85%] aspect-square bg-white/5 border border-secondary/10 overflow-hidden">

            <span className="absolute top-4 left-4.5 z-10 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-secondary text-primary">
              {shoe.category}
            </span>

            <span className="absolute top-4 right-4.5 z-10 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-primary/60 text-white/70 border border-white/10">
              {shoe.gender}
            </span>

            <Image
              src={shoe.imageUrl}
              alt={shoe.name}
              fill
              className="object-contain p-4"
              priority
            />
          </div>

        </div>

        {/* Info Side */}
        <div className="flex flex-col gap-4">

          {/* Brand */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary/70">
              {shoe.brand}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {shoe.name}
          </h1>

          {/* Divider */}
          <div className="h-px bg-secondary/10" />

          {/* Meta info */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 border border-secondary/15 px-3 py-2">
              <Tag size={12} className="text-secondary/60" />
              <span className="text-[10px] uppercase tracking-widest text-white/50">{shoe.category}</span>
            </div>
            <div className="flex items-center gap-2 border border-secondary/15 px-3 py-2">
              <Users size={12} className="text-secondary/60" />
              <span className="text-[10px] uppercase tracking-widest text-white/50">{shoe.gender}</span>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">${shoe.price}</span>
              <span className="text-sm text-white/30">USD</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-secondary/10" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary font-bold text-sm uppercase tracking-widest py-4 px-8 transition-colors duration-300 cursor-pointer">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-secondary/30 hover:border-secondary text-secondary text-sm uppercase tracking-widest py-4 px-8 transition-colors duration-300 cursor-pointer">
              Buy Now
            </button>
          </div>

          {/* Bottom note */}
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            ✓ Free delivery &nbsp;·&nbsp; ✓ Easy returns &nbsp;·&nbsp; ✓ Authentic guarantee
          </p>
        </div>
      </section>
    </div>
  )
}

export default CardDetailPage