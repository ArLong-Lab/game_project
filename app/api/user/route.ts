import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Team from "../../models/team"
import User from "../../models/user"


export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const { username } = await req.json()

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 })
    }

    // Try to find the user first
    
    let user = await User.findOne({ username }).populate("team")

    // If user doesn't exist, create it
    if (!user) {
      user = await User.create({ username })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to find or create user" }, { status: 500 })
  }
}
