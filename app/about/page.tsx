import Link from "next/link";
import {
  Heart,
  Sparkles,
  BookOpen,
  Stars,
  Users,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-6 pt-24">
        <div className="max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            <Stars size={16} />
            A Collection of Soulmate Stories
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            About
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Before Her Name Existed
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            A storytelling project dedicated to documenting real experiences
            of soulmate marriages, spiritual recognition, unexplained
            familiarity, dreams, synchronicities, and the mysterious ways
            people find each other across time.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
          <p className="text-center text-2xl font-light italic text-gray-200 md:text-4xl">
            “I loved the story before I knew the character.”
          </p>

          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="mx-auto mt-8 max-w-3xl text-center text-gray-400">
            This single idea inspired the creation of a space where people
            can share experiences that seem to begin before the first meeting,
            before the first conversation, and sometimes before a name even
            exists.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Why This Project Exists
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              Not to prove. Not to convince. Not to debate.
              Simply to listen and document extraordinary human experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-purple-400/40">
              <Heart className="mb-5 text-pink-400" size={40} />

              <h3 className="mb-4 text-2xl font-semibold">
                Real Stories
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Stories from people who experienced soulmate recognition,
                powerful intuition, recurring dreams, and meaningful
                relationships that transformed their lives.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-indigo-400/40">
              <Sparkles className="mb-5 text-indigo-400" size={40} />

              <h3 className="mb-4 text-2xl font-semibold">
                Spiritual Curiosity
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Exploring questions about destiny, soul connections,
                synchronicities, karmic relationships, and experiences
                beyond ordinary explanation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-yellow-400/40">
              <BookOpen className="mb-5 text-yellow-300" size={40} />

              <h3 className="mb-4 text-2xl font-semibold">
                Shared Human Experience
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Bringing together stories from love marriages, arranged
                marriages, friendships, and unexpected encounters that
                ultimately led to lifelong partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-xl md:p-16">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              What We Explore
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <ul className="space-y-5 text-gray-300">
                  <li>✦ Dreams about a future spouse</li>
                  <li>✦ Soulmate recognition stories</li>
                  <li>✦ Past-life connection experiences</li>
                  <li>✦ Spiritual signs and synchronicities</li>
                  <li>✦ Intuition before meeting a partner</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-5 text-gray-300">
                  <li>✦ Arranged marriage soulmate stories</li>
                  <li>✦ Unexpected relationship journeys</li>
                  <li>✦ Personal transformation through love</li>
                  <li>✦ Destiny and karmic relationship experiences</li>
                  <li>✦ Unexplained familiarity and connection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Users
            size={60}
            className="mx-auto mb-8 text-purple-400"
          />

          <h2 className="text-4xl font-bold md:text-5xl">
            A Growing Collection of Stories
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
            Every story adds another perspective to one of humanity's oldest
            questions:
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-2xl italic text-white md:text-3xl">
            Can someone become part of your story before they ever enter
            your life?
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-indigo-900/20 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold md:text-5xl">
            Share Your Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Have you experienced soulmate recognition, dreams, signs,
            synchronicities, or a connection that felt destined?
          </p>

          <Link
            href="/submit"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Submit Your Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}