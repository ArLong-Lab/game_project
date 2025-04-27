import { Team } from "../types"

export async function createTeam(data: Omit<Team, "_id" | "wins" | "losses" | "tournaments">) {
  const res = await fetch("/api/team", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Failed to create team")
  return res.json()
}

export async function joinTeam(teamId: string) {
    const res = await fetch("/api/team/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamId }),
    })
    if (!res.ok) throw new Error("Failed to join team")
    return res.json()
  }
  