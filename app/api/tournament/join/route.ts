import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Tournament from "../../../models/tournament"
import Team from "../../../models/team"

export async function POST(req: NextRequest) {
  await connectDB()

  try {
    const { teamId, tournamentId } = await req.json()

    if (!teamId || !tournamentId) {
      return NextResponse.json({ error: "teamId and tournamentId are required" }, { status: 400 })
    }

    // Find the team
    const team = await Team.findById(teamId)
    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 })
    }

    // Find the tournament
    const tournament = await Tournament.findById(tournamentId)
    if (!tournament) {
      return NextResponse.json({ error: "Tournament not found" }, { status: 404 })
    }

    // Check if the team is already in the tournament
    // if (tournament.teams.includes(team._id)) {
    //   return NextResponse.json({ message: "Team already joined this tournament" }, { status: 200 })
    // }

    // Add the team to the tournament
    // team.tournaments.push(tournament._id)
    // await team.save()

    // Optionally update the Team's tournaments list too
    team.tournaments = team.tournaments || []
    team.tournaments.push(tournament._id)
    await team.save()

    return NextResponse.json({ message: "Team successfully joined tournament" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
