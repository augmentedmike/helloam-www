import { NextResponse } from "next/server";

// Session checkout removed — contact sales for demo scheduling.
export async function POST() {
  return NextResponse.json({ error: "Not available." }, { status: 410 });
}
