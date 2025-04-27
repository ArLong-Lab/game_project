"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Users, ImagePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createTeam } from "@/lib/apis/teams"
import { uploadImageToS3 } from "@/lib/apis/upload"
// import { createTeam, joinTeam } from "@/lib/apis/team" // you'll create these API functions

export default function CreateOrJoinTeamPage() {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: "",
    logo: null as File | null,
  })
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [joinTeamId, setJoinTeamId] = useState("")
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, logo: file }))
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    let logoUrl = "/placeholder.svg"; // Default

    if (formData.logo) {
      // Upload to S3
      logoUrl = await uploadImageToS3(formData.logo);
    }

    const teamData = {
      name: formData.name,
      logo: logoUrl,
      wins: 0,
      losses: 0,
      tournaments: [],
    };

    await createTeam(teamData);
    console.log(formData)
    // router.push("/tournament") // redirect to teams page
  }

  const handleJoinTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    // await joinTeam(joinTeamId)
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
        Back to Teams
      </Button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
          Create or Join a Team
        </h1>

        {/* Create Team */}
        <form onSubmit={handleCreateTeam}>
          <Card className="bg-[#1a1836] border-[#2a2852] mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6 text-purple-600">Create a Team</h2>

              <div className="grid grid-cols-1 gap-6 text-white">
                <div className="space-y-2">
                  <Label htmlFor="name">Team Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter team name"
                    className="bg-[#0c0a20] border-[#2a2852] text-white"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo">Team Logo URL</Label>
                  <div className="relative">
                    <ImagePlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="logo"
                      type="file"
                      name="logo"
                      accept="image/*"
                      placeholder="Enter logo URL (or keep default)"
                      className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                     
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  Create Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Join Existing Team */}
        <form onSubmit={handleJoinTeam}>
          <Card className="bg-[#1a1836] border-[#2a2852]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6 text-purple-600">Join a Team</h2>

              <div className="space-y-2 text-white">
                <Label htmlFor="teamId">Team ID</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="teamId"
                    name="teamId"
                    placeholder="Enter team ID to join"
                    className="bg-[#0c0a20] border-[#2a2852] text-white pl-10"
                    value={joinTeamId}
                    onChange={(e) => setJoinTeamId(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  variant="outline"
                  className="border-[#2a2852] text-white bg-[#2a2852]"
                >
                  Join Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
