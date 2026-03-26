import { NextResponse } from "next/server";

// Hardware checkout removed — AM repositioned as digital worker platform.
export async function POST() {
  return NextResponse.json({ error: "Not available." }, { status: 410 });
}
