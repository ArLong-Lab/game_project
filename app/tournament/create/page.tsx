"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Clock, MapPin, Trophy, Users, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createTournament } from "@/lib/apis/tournament"

export default function CreateTournamentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    _id:"",
    name: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "Online",
    type: "",
    prize: "",
    image: "",
    status: "upcoming",
    teams: 10,
    maxTeams: 0,
    rules: ["Teams must have 4 players", "All players must be at least 16 years old"],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addRule = () => {
    setFormData((prev) => ({
      ...prev,
      rules: [...prev.rules, ""],
    }))
  }

  const updateRule = (index: number, value: string) => {
    const updatedRules = [...formData.rules]
    updatedRules[index] = value
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }))
  }

  const removeRule = (index: number) => {
    const updatedRules = formData.rules.filter((_, i) => i !== index)
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    await createTournament(formData);
    // Redirect back to tournaments page
    router.push("/tournament")
  }

  return (
      <div className="container mx-auto py-8 px-4">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:bg-[#1a1836] hover:text-white"
          onClick={() => router.push("/tournament")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tournaments
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            Create New Tournament
          </h1>

          <form onSubmit={handleSubmit}>
            <Card className="bg-[#1a1836] border-[#2a2852] mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6 text-purple-600">Basic Information</h2>

                <div className="grid grid-cols-1 gap-6 text-white">
                  <div className="space-y-2 ">
                    <Label htmlFor="name">Tournament Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter tournament name"
                      className="bg-[#0c0a20] border-[#2a2852] text-white"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Enter tournament description"
                      className="bg-[#0c0a20] border-[#2a2852] text-white min-h-[120px]"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Tournament Type</Label>
                      <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                        <SelectTrigger className="bg-[#0c0a20] border-[#2a2852] text-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1836] border-[#2a2852] text-white">
                          <SelectItem value="Battle Royale">Battle Royale</SelectItem>
                          <SelectItem value="Team Deathmatch">Team Deathmatch</SelectItem>
                          <SelectItem value="Capture the Flag">Capture the Flag</SelectItem>
                          <SelectItem value="Free for All">Free for All</SelectItem>
                          <SelectItem value="Custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="location"
                          name="location"
                          placeholder="Online or venue"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startTime">Start Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="startTime"
                          name="startTime"
                          type="time"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.startTime}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endTime">End Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="endTime"
                          name="endTime"
                          type="time"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.endTime}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prize">Prize Pool</Label>
                      <div className="relative">
                        <Trophy className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="prize"
                          name="prize"
                          placeholder="e.g. $1,000"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.prize}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maxTeams">Maximum Teams</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="maxTeams"
                          name="maxTeams"
                          type="number"
                          placeholder="e.g. 16"
                          className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                          value={formData.maxTeams.toString()}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1836] border-[#2a2852] mb-8">
              <CardContent className="p-6 ">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-purple-600">Tournament Rules</h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRule}
                    className="border-[#2a2852] text-white bg-[#2a2852]"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Rule
                  </Button>
                </div>

                <div className="space-y-4">
                  {formData.rules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2a2852] flex items-center justify-center">
                        {index + 1}
                      </div>
                      <Input
                        value={rule}
                        onChange={(e) => updateRule(index, e.target.value)}
                        className="bg-[#0c0a20] border-[#2a2852] text-white flex-grow"
                        placeholder="Enter rule"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeRule(index)}
                        className="text-red-500 hover:text-red-400 hover:bg-[#2a2852]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/tournament")}
                className="border-[#2a2852] text-white bg-[#2a2852]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                Create Tournament
              </Button>
            </div>
          </form>
        </div>
      </div>
  )
}
