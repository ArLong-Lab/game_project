// app/api/tournament/route.ts
import { connectDB } from "@/lib/db";
import Tournament from "../../models/tournament";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const tournament = await Tournament.create(body);
    return NextResponse.json(tournament, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating tournament", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const tournaments = await Tournament.find();
    return NextResponse.json(tournaments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching tournaments", error }, { status: 500 });
  }
}
