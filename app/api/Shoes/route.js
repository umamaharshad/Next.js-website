import { NextResponse } from "next/server";
import { shoes } from "../../../Data/datashoes";

// GET all shoes
export async function GET() {
  return NextResponse.json(shoes);
}
