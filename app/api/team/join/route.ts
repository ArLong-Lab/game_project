import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import User from "../../../models/user"

export async function POST(req: NextRequest) {
  await connectDB()
  const { teamId , name} = await req.json()

  try {

    const user = await User.findOne({username: name});


    if(!user){
        const newUser = await new User({username: name, team: teamId}).save()
        return NextResponse.json(newUser, { status: 200 })
    }

    // if (!userId) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    // }

    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      { team: teamId },
      { new: true }
    )

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to join team" }, { status: 500 })
  }
}
