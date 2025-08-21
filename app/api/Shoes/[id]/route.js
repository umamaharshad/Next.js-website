import { NextResponse } from "next/server";
import { shoes } from "@/data/shoes";

// GET shoe by ID
export async function GET(req, { params }) {
  const shoe = shoes.find((s) => s.id === parseInt(params.id));
  if (!shoe) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(shoe);
}

// PUT update shoe
export async function PUT(req, { params }) {
  const body = await req.json();
  const index = shoes.findIndex((s) => s.id === parseInt(params.id));
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  shoes[index] = { ...shoes[index], ...body };
  return NextResponse.json(shoes[index]);
}

// DELETE shoe
export async function DELETE(req, { params }) {
  const index = shoes.findIndex((s) => s.id === parseInt(params.id));
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const deleted = shoes.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
