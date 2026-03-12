import React from 'react'
import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';

async function CardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "ShoeData.json")
  const rawData = await fs.readFile(filePath, "utf8")
  const allShoes: Shoe[] = JSON.parse(rawData)

  

  return (
    <div>
      <h1>Card: { slug }</h1>
    </div>
  )
}

export default CardDetailPage