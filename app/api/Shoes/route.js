import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET all shoes (products)
export async function GET() {
  try {
    const shoes = await prisma.product.findMany({
      include: { reviews: true }, // remove if you don’t want reviews
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(shoes);
  } catch (error) {
    console.error("Error fetching shoes:", error);
    return NextResponse.json({ error: "Failed to fetch shoes" }, { status: 500 });
  }
}
