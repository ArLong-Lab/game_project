"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Trophy, Users, Clock, MapPin, Share2, Youtube, Twitch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock tournament data
const TOURNAMENTS = [
  {
    id: "1",
    name: "Summer Gaming Championship",
    status: "upcoming",
    date: "2024-06-15",
    type: "Battle Royale",
    teams: 16,
    prize: "$5,000",
    description:
      "The ultimate Battle Royale tournament featuring the best teams from around the world. Compete for glory and a massive prize pool!",
    location: "Online",
    startTime: "14:00 UTC",
    endTime: "20:00 UTC",
    rules: [
      "Teams must have 4 players",
      "All players must be at least 16 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    matches: [
      {
        id: "m1",
        team1: "Phoenix Rising",
        team2: "Shadow Hunters",
        time: "14:00",
        date: "2024-06-15",
        group: "Group A",
      },
      { id: "m2", team1: "Neon Dragons", team2: "Frost Giants", time: "15:30", date: "2024-06-15", group: "Group A" },
      { id: "m3", team1: "Crimson Elite", team2: "Void Walkers", time: "17:00", date: "2024-06-15", group: "Group B" },
      { id: "m4", team1: "Thunder Lords", team2: "Mystic Owls", time: "18:30", date: "2024-06-15", group: "Group B" },
    ],
    teamsList: [
      { id: "t1", name: "Phoenix Rising", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t2", name: "Shadow Hunters", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t3", name: "Neon Dragons", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t4", name: "Frost Giants", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t5", name: "Crimson Elite", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t6", name: "Void Walkers", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t7", name: "Thunder Lords", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t8", name: "Mystic Owls", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
    ],
    image: "/placeholder.svg?height=300&width=800",
  },
  {
    id: "2",
    name: "Winter Esports Showdown",
    status: "active",
    date: "2024-05-25",
    type: "Team Deathmatch",
    teams: 8,
    prize: "$2,500",
    description:
      "An intense Team Deathmatch tournament where the best squads battle for supremacy. Fast-paced action guaranteed!",
    location: "Online",
    startTime: "10:00 UTC",
    endTime: "18:00 UTC",
    rules: [
      "Teams must have 5 players",
      "All players must be at least 16 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    matches: [
      {
        id: "m1",
        team1: "Purple Death Cadets",
        team2: "Trigger Brain Squad",
        time: "10:00",
        date: "2024-05-25",
        group: "Group 04",
      },
      {
        id: "m2",
        team1: "The Black Hat Hackers",
        team2: "Your Worst Nightmare",
        time: "12:30",
        date: "2024-05-25",
        group: "Group 05",
      },
      {
        id: "m3",
        team1: "Witches and Wizards",
        team2: "Resting Bitch Face",
        time: "15:00",
        date: "2024-05-25",
        group: "Group 06",
      },
      { id: "m4", team1: "Game Over", team2: "Reaper Squad", time: "17:30", date: "2024-05-25", group: "Group 07" },
    ],
    teamsList: [
      { id: "t1", name: "Purple Death Cadets", logo: "/placeholder.svg?height=60&width=60", wins: 1, losses: 0 },
      { id: "t2", name: "Trigger Brain Squad", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 1 },
      { id: "t3", name: "The Black Hat Hackers", logo: "/placeholder.svg?height=60&width=60", wins: 1, losses: 0 },
      { id: "t4", name: "Your Worst Nightmare", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 1 },
      { id: "t5", name: "Witches and Wizards", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t6", name: "Resting Bitch Face", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t7", name: "Game Over", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
      { id: "t8", name: "Reaper Squad", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 0 },
    ],
    image: "/placeholder.svg?height=300&width=800",
  },
  {
    id: "3",
    name: "Pro Gaming League",
    status: "completed",
    date: "2024-04-10",
    type: "Capture the Flag",
    teams: 12,
    prize: "$3,000",
    description:
      "The premier Capture the Flag tournament for professional teams. Strategy and teamwork are key to victory!",
    location: "Online",
    startTime: "12:00 UTC",
    endTime: "20:00 UTC",
    rules: [
      "Teams must have 6 players",
      "All players must be at least 18 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    matches: [
      {
        id: "m1",
        team1: "Digital Demons",
        team2: "Cyber Samurai",
        time: "12:00",
        date: "2024-04-10",
        group: "Group A",
      },
      {
        id: "m2",
        team1: "Pixel Pirates",
        team2: "Binary Bandits",
        time: "14:00",
        date: "2024-04-10",
        group: "Group A",
      },
      {
        id: "m3",
        team1: "Code Crushers",
        team2: "Data Destroyers",
        time: "16:00",
        date: "2024-04-10",
        group: "Group B",
      },
      {
        id: "m4",
        team1: "Algorithm Assassins",
        team2: "Network Ninjas",
        time: "18:00",
        date: "2024-04-10",
        group: "Group B",
      },
    ],
    teamsList: [
      { id: "t1", name: "Digital Demons", logo: "/placeholder.svg?height=60&width=60", wins: 3, losses: 0 },
      { id: "t2", name: "Cyber Samurai", logo: "/placeholder.svg?height=60&width=60", wins: 2, losses: 1 },
      { id: "t3", name: "Pixel Pirates", logo: "/placeholder.svg?height=60&width=60", wins: 2, losses: 1 },
      { id: "t4", name: "Binary Bandits", logo: "/placeholder.svg?height=60&width=60", wins: 1, losses: 2 },
      { id: "t5", name: "Code Crushers", logo: "/placeholder.svg?height=60&width=60", wins: 1, losses: 2 },
      { id: "t6", name: "Data Destroyers", logo: "/placeholder.svg?height=60&width=60", wins: 0, losses: 3 },
    ],
    image: "/placeholder.svg?height=300&width=800",
  },
  {
    id: "4",
    name: "Unigine Championship Series",
    status: "upcoming",
    date: "2024-07-20",
    type: "Team Deathmatch",
    teams: 24,
    prize: "$10,000",
    image: "/placeholder.svg?height=300&width=800",
  },
  {
    id: "5",
    name: "Midnight Madness Tournament",
    status: "active",
    date: "2024-05-30",
    type: "Battle Royale",
    teams: 20,
    prize: "$4,000",
    image: "/placeholder.svg?height=300&width=800",
  },
]

export default function TournamentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [tournament, setTournament] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchTournament = () => {
      const found = TOURNAMENTS.find((t) => t.id === params.id)
      if (found) {
        setTournament(found)
      } else {
        // Redirect to tournaments page if not found
        router.push("/tournament")
      }
      setLoading(false)
    }

    fetchTournament()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0a20] text-white flex items-center justify-center">
        <div className="text-2xl">Loading tournament details...</div>
      </div>
    )
  }

  if (!tournament) {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-600 hover:bg-blue-700"
      case "active":
        return "bg-green-600 hover:bg-green-700"
      case "completed":
        return "bg-purple-600 hover:bg-purple-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  return (
    <main className="min-h-screen bg-[#0c0a20] text-white">
      <div className="relative">
        <div className="h-64 md:h-80 w-full relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${tournament.image})`,
              filter: "brightness(0.4)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a20] to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative -mt-32">
          <Button
            variant="ghost"
            className="mb-4 text-white hover:bg-[#1a1836] hover:text-white"
            onClick={() => router.push("/tournament")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tournaments
          </Button>

          <div className="bg-[#1a1836] border border-[#2a2852] rounded-lg p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <Badge className={`mb-2 ${getStatusColor(tournament.status)}`}>
                  {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                  {tournament.name}
                </h1>
              </div>

              <div className="flex mt-4 md:mt-0 space-x-2">
                <Button className="bg-[#2a2852] hover:bg-[#3a3862]">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                {tournament.status === "active" && (
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Watch Live
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-4 bg-[#0c0a20] rounded-lg">
                <Calendar className="h-6 w-6 mr-3 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div>{new Date(tournament.date).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-[#0c0a20] rounded-lg">
                <Trophy className="h-6 w-6 mr-3 text-yellow-500" />
                <div>
                  <div className="text-sm text-gray-400">Prize Pool</div>
                  <div>{tournament.prize}</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-[#0c0a20] rounded-lg">
                <Users className="h-6 w-6 mr-3 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-400">Teams</div>
                  <div>{tournament.teams} Teams</div>
                </div>
              </div>
            </div>

            {tournament.description && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">About the Tournament</h2>
                <p className="text-gray-300">{tournament.description}</p>
              </div>
            )}

            {tournament.matches && (
              <Tabs defaultValue="matches" className="w-full ">
                <TabsList className="bg-[#0c0a20] border-b border-[#2a2852] w-full justify-start mb-6">
                  <TabsTrigger value="matches" className="data-[state=active]:bg-[#2a2852] text-white">
                    Matches
                  </TabsTrigger>
                  <TabsTrigger value="teams" className="data-[state=active]:bg-[#2a2852] text-white">
                    Teams
                  </TabsTrigger>
                  {tournament.rules && (
                    <TabsTrigger value="rules" className="data-[state=active]:bg-[#2a2852] text-white">
                      Rules
                    </TabsTrigger>
                  )}
                </TabsList>

                <TabsContent value="matches" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {tournament.matches.map((match: any) => (
                      <Card key={match.id} className="bg-[#0c0a20] border-[#2a2852] overflow-hidden">
                        <CardContent className="p-0">
                          <div className="p-4 bg-[#1a1836] border-b border-[#2a2852] flex justify-between items-center">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="text-gray-400">{match.time}</span>
                            </div>
                            <Badge className="bg-[#2a2852]">{match.group}</Badge>
                          </div>

                          <div className="p-6 flex justify-between items-center">
                            <div className="flex flex-col items-center text-center w-2/5">
                              <div className="w-16 h-16 bg-[#1a1836] rounded-full flex items-center justify-center mb-2">
                                <span className="text-lg font-bold">{match.team1.substring(0, 2)}</span>
                              </div>
                              <div className="font-bold text-white">{match.team1}</div>
                            </div>

                            <div className="text-center">
                              <div className="text-2xl font-bold mb-1 text-white">VS</div>
                              <div className="flex space-x-2">
                                <Youtube className="h-4 w-4 text-red-500" />
                                <Twitch className="h-4 w-4 text-purple-500" />
                              </div>
                            </div>

                            <div className="flex flex-col items-center text-center w-2/5">
                              <div className="w-16 h-16 bg-[#1a1836] rounded-full flex items-center justify-center mb-2">
                                <span className="text-lg font-bold">{match.team2.substring(0, 2)}</span>
                              </div>
                              <div className="font-bold text-white">{match.team2}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="teams" className="mt-0 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tournament.teamsList.map((team: any) => (
                      <Card key={team.id} className="bg-[#0c0a20] border-[#2a2852]">
                        <CardContent className="p-4 flex items-center">
                          <div className="mr-4">
                            <img
                              src={team.logo || "/placeholder.svg"}
                              alt={team.name}
                              className="w-12 h-12 rounded-full"
                            />
                          </div>
                          <div className="">
                            <h3 className="font-bold text-white">{team.name}</h3>
                            <div className="text-sm text-gray-400">
                              {team.wins}-{team.losses} W/L
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {tournament.rules && (
                  <TabsContent value="rules" className="mt-0">
                    <Card className="bg-[#0c0a20] border-[#2a2852]">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-white">Tournament Rules</h3>
                        <ul className="space-y-2">
                          {tournament.rules.map((rule: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="flex w-6 h-6 rounded-full bg-purple-600 text-white items-center justify-center mr-3 flex-shrink-0">
                                {index + 1}
                              </span>
                              <p className="text-white">{rule}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            )}

            {tournament.location && tournament.startTime && (
              <div className="mt-8 p-6 bg-[#0c0a20] rounded-lg border border-[#2a2852]">
                <h2 className="text-xl font-bold mb-4">Tournament Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div>{tournament.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-400">Time</div>
                      <div className="">
                        {tournament.startTime} - {tournament.endTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
