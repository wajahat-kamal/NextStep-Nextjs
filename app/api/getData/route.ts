import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "ShoeData.json")
        const data = await fs.readFile(filePath, "utf8")

        return NextResponse.json({
            success: true,
            data: JSON.parse(data)
        }, { status: 200 })
    } catch (error: any) {
        NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}