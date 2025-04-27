"use client"

import Image from "next/image"
import { ArrowUp } from "lucide-react"

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0e0a23] text-white pb-20 relative">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-[#7b4bff]"></div>
          </div>
          <h2 className="text-xl font-medium uppercase tracking-wide text-white">WHAT'S TRENDING NOW</h2>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span className="text-white">GAMING </span>
            <span className="text-[#7b4bff]">INSIGHTS</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Your source for the latest gaming news, reviews, and industry updates from the world of AAA titles to indie
            gems
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/gta6.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="GTA 6 Trailer"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">NEWS</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 25 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                JASON PARKER
              </div>
            </div>

            <h3 className="text-2xl font-bold">GTA 6 Release Date Confirmed With Explosive New Trailer</h3>

            <p className="text-gray-400">
              Rockstar Games has finally announced the release date for the highly anticipated Grand Theft Auto VI,
              alongside a stunning new trailer showcasing the game's expansive open world.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/ps6.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="PlayStation 6 Rumors"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">
                HARDWARE
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 22 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                EMILY RODRIGUEZ
              </div>
            </div>

            <h3 className="text-2xl font-bold">PlayStation 6 Specs Leaked: What To Expect From Sony's Next Console</h3>

            <p className="text-gray-400">
              Industry insiders have leaked potential specifications for Sony's next-generation PlayStation 6,
              suggesting a massive leap in processing power and revolutionary cooling technology.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/ER.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="Elden Ring DLC"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">DLC</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 18 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                MARCUS THOMPSON
              </div>
            </div>

            <h3 className="text-2xl font-bold">
              Elden Ring: Shadow of the Erdtree DLC Review - FromSoftware's Masterpiece
            </h3>

            <p className="text-gray-400">
              FromSoftware's highly anticipated DLC for Elden Ring expands on the original's brilliance with challenging
              new bosses, breathtaking environments, and lore that deepens the already rich world.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/indegames.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="Indie Game Festival"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">INDIE</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 15 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                OLIVIA CHEN
              </div>
            </div>

            <h3 className="text-2xl font-bold">Top 10 Indie Games That Stole The Show At This Year's Festival</h3>

            <p className="text-gray-400">
              This year's Independent Games Festival showcased some incredible talent from small studios. We've rounded
              up the ten most impressive titles that caught our attention and deserve yours.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/ggl.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="Esports Tournament"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">ESPORTS</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 10 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                TYLER JACKSON
              </div>
            </div>

            <h3 className="text-2xl font-bold">Global Gaming League Finals Break Viewership Records</h3>

            <p className="text-gray-400">
              The championship match of this year's Global Gaming League shattered previous esports viewership records,
              with over 12 million concurrent viewers tuning in to watch the intense final rounds.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/vr.jpg?height=300&width=500"
              width={500}
              height={300}
              alt="VR Gaming"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0">
              <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold">VR</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </span>
                APR 05 2025
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                SOPHIA WILLIAMS
              </div>
            </div>

            <h3 className="text-2xl font-bold">Next-Gen VR Headset Promises To Revolutionize Gaming Immersion</h3>

            <p className="text-gray-400">
              A new virtual reality headset with groundbreaking haptic feedback technology and 8K per-eye resolution is
              set to launch this fall, potentially changing how we experience virtual worlds forever.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#1a1635] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/ai.jpg?height=600&width=800"
                width={800}
                height={600}
                alt="The Future of Gaming"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-2 font-bold rounded-md">
                  FEATURE
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline-block"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                  </span>
                  APR 28 2025
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline-block"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  ELLIOT ALDERSON
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">The Future of Gaming: AI, Cloud, and Beyond</h2>
              <p className="text-gray-300 mb-6">
                As we stand on the precipice of a new era in gaming, technologies like artificial intelligence, cloud
                computing, and advanced haptics are converging to create experiences that were once the realm of science
                fiction. This in-depth feature explores how these technologies will shape the games we play over the
                next decade.
              </p>
              <p className="text-gray-300 mb-8">
                From procedurally generated worlds with unprecedented detail to NPCs with genuine emotional
                intelligence, the boundaries between virtual and reality continue to blur. We spoke with leading
                developers, hardware engineers, and futurists to map out what's coming next.
              </p>
              <button className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Categories */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#7b4bff] pl-4">Gaming Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Action", count: 42 },
            { name: "RPG", count: 38 },
            { name: "Strategy", count: 24 },
            { name: "Simulation", count: 19 },
            { name: "Sports", count: 15 },
            { name: "Adventure", count: 31 },
            { name: "FPS", count: 27 },
            { name: "Indie", count: 53 },
            { name: "Racing", count: 12 },
            { name: "Horror", count: 18 },
            { name: "Puzzle", count: 21 },
            { name: "Fighting", count: 14 },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1635] p-4 rounded-lg text-center hover:bg-[#7b4bff] hover:bg-opacity-20 transition-colors cursor-pointer group"
            >
              <h3 className="font-bold group-hover:text-[#7b4bff]">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.count} articles</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-[#1a1635] to-[#2a1a50] rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Gaming News</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest gaming news, reviews, and exclusive content directly in
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e0a23] border border-gray-700 text-white focus:outline-none focus:border-[#7b4bff]"
              />
              <button className="bg-gradient-to-r from-[#7b4bff] to-[#00a3ff] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
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
