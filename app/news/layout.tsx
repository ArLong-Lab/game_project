import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gaming Insights | Your Gaming News Source",
  description: "Explore the latest gaming news, reviews, and industry updates from AAA titles to indie gems.",
  keywords: "gaming news, video games, game reviews, esports, gaming industry, indie games, AAA games",
  openGraph: {
    title: "Gaming Insights | Your Gaming News Source",
    description: "Your source for the latest gaming news, reviews, and industry updates",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        width: 1200,
        height: 600,
        alt: "Gaming Insights",
      },
    ],
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
