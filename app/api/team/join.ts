import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import User from "../../models/user"

export async function POST(req: NextRequest) {
  await connectDB()
  const { teamId } = await req.json()

  try {
    // You can change this to get userId from session if you use auth
    const userId = "somehow-get-current-user-id"

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { team: teamId },
      { new: true }
    )

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to join team" }, { status: 500 })
  }
}
