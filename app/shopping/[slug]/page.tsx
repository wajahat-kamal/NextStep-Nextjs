import React from 'react'
import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';

async function CardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "ShoeData.json")
  const rawData = await fs.readFile(filePath, "utf8")
  const allShoes: Shoe[] = JSON.parse(rawData)

  const shoe = allShoes.find((shoe) => shoe.slug === slug)

  return (
    <div className='min-h-screen'>
      {shoe ? (
        <div className='min-h-screen'>
          <div>
            <Image src={shoe.imageUrl} alt='Shoe Image' width={100} height={100} />
          </div>
          <div>

          </div>
        </div>
      ) : (
        <div>Shoe not found</div>
      )}
    </div>
  )
}

export default CardDetailPage