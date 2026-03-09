import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "data", "ShoeData.json")
        const rawData = await fs.readFile(filePath, "utf8")

        return NextResponse.json({
            success: true,
            data: JSON.parse(rawData)
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error in get-data"
        }, { status: 500 })
    }
}