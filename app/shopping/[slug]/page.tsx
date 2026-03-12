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
        <div className='min-h-screen flex justify-center items-center flex-col md:flex-row'>
          <div className=''>
            <Image src={shoe.imageUrl} alt='Shoe Image' width={400} height={400} />
          </div>
          <div className='flex justify-center items-start flex-col p-6 h-full w-[40%]'>
            <span className='text-white text-xl px-2  bg-secondary/60'>{shoe.brand}</span>
            <h1 className='text-3xl text-white'>{shoe.name}</h1>
            <div>
              <p>{shoe.category}</p>
              <p>{shoe.gender}</p>
            </div>
            <h1>{shoe.price}</h1>
          </div>
        </div>
      ) : (
        <div>Shoe not found</div>
      )}
    </div>
  )
}

export default CardDetailPage