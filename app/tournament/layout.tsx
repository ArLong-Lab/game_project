import type { ReactNode } from "react"

export default function TournamentLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="min-h-screen bg-[#0c0a20]">{children}</div>
}
