import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cyberpunk 2077 Review | Game Reviews",
  description:
    "An in-depth review of CD Projekt Red's ambitious open-world RPG set in the dystopian Night City. Explore gameplay, story, and our verdict on this futuristic adventure.",
  keywords: "Cyberpunk 2077, game review, CD Projekt Red, RPG, open world, Night City, V, cyberpunk, gaming",
  openGraph: {
    title: "Cyberpunk 2077 Review | Game Reviews",
    description: "An in-depth review of CD Projekt Red's ambitious open-world RPG set in the dystopian Night City",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Cyberpunk 2077",
      },
    ],
  },
}

export default function GameReviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
