import { Shoe } from '@/types/Shoe';
import fs from 'node:fs/promises';
import path from 'node:path';

async function getData() {
    const filePath = path.join(process.cwd(), "data", "ShoeData.json")
    const raw = await fs.readFile(filePath, "utf8")
    const allShoes: Shoe[] = JSON.parse(raw)
    return allShoes;
}
export default getData