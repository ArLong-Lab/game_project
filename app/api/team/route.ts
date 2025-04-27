import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Team from "../../models/team"

// Create a new team
export async function POST(req: NextRequest) {
  await connectDB()
  const { name, logo } = await req.json()

  try {
    const newTeam = await Team.create({ name, logo })
    return NextResponse.json(newTeam, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to create team" }, { status: 500 })
  }
}

// Get all teams
// export async function GET() {
//   await connectDB()

//   try {
//     const teams = await Team.find()
//     return NextResponse.json(teams, { status: 200 })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 })
//   }
// }

export async function GET(req: NextRequest) {
    await connectDB()
  
    const { searchParams } = new URL(req.url)
    const tournamentId = searchParams.get("tournamentId")
  
    if (!tournamentId) {
      return NextResponse.json({ error: "Tournament ID is required" }, { status: 400 })
    }
  
    try {
      const teams = await Team.find({ tournaments: tournamentId })
      if(teams.length===0){
        return NextResponse.json(null, { status: 200 })
      }
      return NextResponse.json(teams, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 })
    }
  }
