"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Star, ThumbsUp, MessageSquare, Share2, ArrowUp, Clock, User, Calendar } from "lucide-react"

export default function GameReviewPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState("")

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the comment to a database
    alert("Comment submitted successfully!")
    setComment("")
    setRating(null)
  }

  return (
    <div className="min-h-screen bg-[#0e0a23] text-white pb-20 relative">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-[#7b4bff]"></div>
          </div>
          <h2 className="text-xl font-medium uppercase tracking-wide text-white">GAME REVIEW</h2>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span className="text-white">CYBERPUNK </span>
            <span className="text-[#7b4bff]">2077</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            An in-depth review of CD Projekt Red's ambitious open-world RPG set in the dystopian Night City
          </p>
        </div>
      </section>

      {/* Featured Game Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/sp.webp?height=600&width=1200"
            width={1200}
            height={600}
            alt="Cyberpunk 2077 Banner"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a23] to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold rounded-md">
                RPG
              </div>
              <div className="bg-gradient-to-r from-[#ff4b7b] to-[#ff8f4b] text-white px-6 py-2 font-bold rounded-md">
                ACTION
              </div>
            </div>
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400" />
              ))}
              <Star className="w-6 h-6 fill-yellow-400 opacity-50" />
              <span className="ml-2 text-white text-xl">4.0/5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7b4bff] pl-4">Game Overview</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with
              power, glamour, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind
              implant that is the key to immortality.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Customize your character's cyberware, skillset, and playstyle, and explore a vast city where the choices
              you make shape the story and the world around you. With its immersive narrative, complex characters, and
              stunning visual design, Cyberpunk 2077 offers a unique gaming experience that blends traditional RPG
              elements with fast-paced action.
            </p>

            <div className="my-10">
              <Image
                src="/sp.webp?height=400&width=800"
                width={800}
                height={400}
                alt="Cyberpunk 2077 Gameplay"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-sm text-gray-400 text-center">
                Night City's neon-lit streets offer countless adventures
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7b4bff] pl-4">Gameplay & Mechanics</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The game offers multiple approaches to combat and exploration. You can choose to be a stealthy netrunner,
              hacking into enemy systems and turning their own technology against them, or a gun-blazing solo, equipped
              with military-grade cyberware and powerful weapons.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The RPG elements are deep and satisfying, with a wide range of skills to develop and perks to unlock. The
              game's dialogue system is particularly noteworthy, offering meaningful choices that impact both immediate
              outcomes and long-term story developments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-[#1a1635] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#7b4bff]">PROS</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Immersive, detailed open world</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Compelling narrative with memorable characters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Diverse gameplay approaches and build options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Stunning visual design and atmosphere</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1635] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#ff4b7b]">CONS</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 rotate-180" />
                    <span>Technical issues on some platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 rotate-180" />
                    <span>AI behavior can be inconsistent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 rotate-180" />
                    <span>Some promised features missing at launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 rotate-180" />
                    <span>Open world activities can feel repetitive</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7b4bff] pl-4">Verdict</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Despite its rocky launch, Cyberpunk 2077 has evolved into an impressive RPG experience through numerous
              updates and patches. The game's strengths lie in its narrative depth, character development, and the
              visually stunning world of Night City. While some technical issues remain, the overall experience is now
              much closer to the vision that CD Projekt Red originally promised.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For fans of immersive RPGs with strong narratives and cyberpunk aesthetics, this game offers dozens of
              hours of engaging content. The recent updates have significantly improved performance and added new
              features, making now an excellent time to visit Night City.
            </p>

            <div className="flex items-center justify-between border-t border-b border-gray-700 py-6 my-10">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 hover:text-[#7b4bff] transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Helpful (124)</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#7b4bff] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Comment</span>
                </button>
              </div>
              <button className="flex items-center gap-2 hover:text-[#7b4bff] transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* User Comments Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#7b4bff] pl-4">User Comments</h2>

              <div className="space-y-8 mb-10">
                <div className="bg-[#1a1635] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#7b4bff] flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="font-bold">GamerX42</h4>
                        <div className="flex items-center text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">
                        This game completely blew me away! The story is incredible and the world feels so alive. I've
                        spent over 100 hours exploring Night City and I'm still finding new things.
                      </p>
                      <div className="text-sm text-gray-400">Posted 3 days ago</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1635] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ff4b7b] flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="font-bold">CyberNinja</h4>
                        <div className="flex items-center text-yellow-400">
                          {[1, 2, 3].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400" />
                          ))}
                          {[4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">
                        It's definitely improved since launch, but I still encounter bugs occasionally. The story and
                        characters are great, but the open world activities get repetitive after a while.
                      </p>
                      <div className="text-sm text-gray-400">Posted 1 week ago</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="bg-[#1a1635] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Leave Your Review</h3>
                <div className="mb-4">
                  <label className="block mb-2">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${rating && rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block mb-2">
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-[#0e0a23] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="Share your thoughts about the game..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#1a1635] p-6 rounded-lg mb-8 sticky top-6">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-4">Game Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 mb-1">Developer</div>
                  <div>CD Projekt Red</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Publisher</div>
                  <div>CD Projekt</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Release Date</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 10, 2020</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Platforms</div>
                  <div>PC, PlayStation, Xbox</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Average Playtime</div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>60+ hours</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">ESRB Rating</div>
                  <div>Mature 17+</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Our Score</h3>
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold text-[#7b4bff]">8.5</div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-yellow-400" />
                    ))}
                    <Star className="w-6 h-6 fill-yellow-400 opacity-50" />
                  </div>
                </div>
                <div className="text-gray-400 mt-2">Great</div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-3 rounded-lg font-bold mt-6 hover:opacity-90 transition-opacity">
                Buy Now
              </button>
            </div>

            {/* Related Games */}
            <div className="bg-[#1a1635] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-4">Related Games</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "The Witcher 3: Wild Hunt",
                    developer: "CD Projekt Red",
                    image: "/placeholder.svg?height=80&width=120",
                  },
                  {
                    title: "Deus Ex: Mankind Divided",
                    developer: "Eidos Montreal",
                    image: "/placeholder.svg?height=80&width=120",
                  },
                  { title: "Ghostrunner", developer: "One More Level", image: "/placeholder.svg?height=80&width=120" },
                ].map((game, index) => (
                  <div key={index} className="flex gap-3 group cursor-pointer">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      width={120}
                      height={80}
                      alt={game.title}
                      className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-bold group-hover:text-[#7b4bff] transition-colors">{game.title}</h4>
                      <div className="text-sm text-gray-400">{game.developer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full border border-[#7b4bff] text-[#7b4bff] px-4 py-2 rounded-lg font-bold mt-6 hover:bg-[#7b4bff] hover:bg-opacity-10 transition-colors">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#1a1635] p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#7b4bff] flex-shrink-0 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Review by ELLIOT ALDERSON</h3>
              <p className="text-gray-300 mb-4">
                Senior Gaming Editor with over 10 years of experience covering RPGs and open-world games. Passionate
                about immersive storytelling and innovative gameplay mechanics.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>APR 28 2025</span>
                </div>
                <div>|</div>
                <div>120 Reviews Published</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] p-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
