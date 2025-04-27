"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, Plus, Calendar, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import NavBar from "@/components/navbar"
import { Tournament } from "@/lib/types"
import { getTournaments } from "@/lib/apis/tournament"

// Mock tournament data
const TOURNAMENTS: Tournament[] = [
  {
    _id: "1",
    name: "Summer Gaming Championship",
    status: "upcoming",
    date: "2024-06-15",
    type: "Battle Royale",
    teams: 16,
    prize: "$5,000",
    image: "/placeholder.svg?height=80&width=80",
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
    maxTeams: 16
  },
  {
    _id: "2",
    name: "Winter Esports Showdown",
    status: "active",
    date: "2024-05-25",
    type: "Team Deathmatch",
    teams: 8,
    prize: "$2,500",
    image: "/placeholder.svg?height=80&width=80",
    description:
      "An intense Team Deathmatch tournament where the best squads battle for supremacy. Fast-paced action guaranteed!",
    location: "Online",
    startTime: "10:00 UTC",
    endTime: "18:00 UTC",rules: [
      "Teams must have 5 players",
      "All players must be at least 16 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    maxTeams: 8
  },
  {
    _id: "3",
    name: "Pro Gaming League",
    status: "completed",
    date: "2024-04-10",
    type: "Capture the Flag",
    teams: 12,
    prize: "$3,000",
    image: "/placeholder.svg?height=80&width=80",
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
    maxTeams: 12
  },
  {
    _id: "4",
    name: "Unigine Championship Series",
    status: "upcoming",
    date: "2024-07-20",
    type: "Team Deathmatch",
    teams: 24,
    prize: "$10,000",
    image: "/placeholder.svg?height=80&width=80",
    description: "A championship series for unigine gamers.",
    startTime: "11:00 AM",
    endTime: "7:00 PM",
    location: "San Francisco, CA",
    rules: [
      "Teams must have 4 players",
      "All players must be at least 16 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    maxTeams: 20
  },
  {
    _id: "5",
    name: "Midnight Madness Tournament",
    status: "active",
    date: "2024-05-30",
    type: "Battle Royale",
    teams: 20,
    prize: "$4,000",
    image: "/placeholder.svg?height=80&width=80",
    description: "A midnight gaming extravaganza.",
    startTime: "8:00 PM",
    endTime: "2:00 AM",
    location: "Las Vegas, NV",
    rules: [
      "Teams must have 5 players",
      "All players must be at least 16 years old",
      "No cheating or exploiting game mechanics",
      "Matches will be streamed on official channels",
      "Tournament admins have final say on all disputes",
    ],
    maxTeams: 20
  },
  
]

export default function TournamentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [tournaments, setTournaments]= useState<Tournament[]>(TOURNAMENTS);
 
  useEffect(()=>{
    const fetchTournaments = async () => {
      try {
        const data = await getTournaments();
        // setTournaments((prev) => {
        //   const merged = [...prev, ...data];
        //   console.log("Merged tournaments:", merged); // log AFTER merging
        //   return merged;
        // })
        const merged = [
          ...TOURNAMENTS,
          ...data.filter(
            (fetchedTournament) =>
              !TOURNAMENTS.some(
                (staticTournament) => staticTournament._id === fetchedTournament._id
              )
          ),
        ];
        setTournaments(merged);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchTournaments();

    return()=>{
      setTournaments([]);
      setSearchQuery("");
      setStatusFilter("all");
    }
  },[])

  // Filter tournaments based on search and filters
  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || tournament.status === statusFilter
    const matchesType = typeFilter === "all" || tournament.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search tournaments..."
              className="pl-10 bg-[#1a1836] border-[#2a2852] text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="bg-[#1a1836] border-[#2a2852] text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1836] border-[#2a2852] text-white">
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="bg-[#1a1836] border-[#2a2852] text-white">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1836] border-[#2a2852] text-white">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Battle Royale">Battle Royale</SelectItem>
              <SelectItem value="Team Deathmatch">Team Deathmatch</SelectItem>
              <SelectItem value="Capture the Flag">Capture the Flag</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.length > 0 ? (
            filteredTournaments.map((tournament) => (
              <Link href={`/tournament/${tournament._id}`} key={tournament._id}>
                <Card className="bg-[#1a1836] border-[#2a2852] hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-400 transition-all duration-300">
                          {tournament.name}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(tournament.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <img
                        src={tournament.image || "/placeholder.svg"}
                        alt={tournament.name}
                        className="w-16 h-16 rounded-md"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge
                        className={`
                        ${
                          tournament.status === "upcoming"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : tournament.status === "active"
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-purple-600 hover:bg-purple-700"
                        }
                      `}
                      >
                        {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                      </Badge>
                      <Badge className="bg-[#2a2852] hover:bg-[#3a3862]">{tournament.type}</Badge>
                    </div>

                    <div className="flex justify-between text-sm text-gray-300">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                        <span>{tournament.prize}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{tournament.teams} Teams</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">No tournaments found</div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setStatusFilter("all")
                  setTypeFilter("all")
                }}
                className="border-[#2a2852] text-white hover:bg-[#2a2852]"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
  )
}
