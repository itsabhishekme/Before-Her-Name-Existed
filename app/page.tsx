import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SoulmateJourney from "@/components/SoulmateJourney";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function Home() {
  const featuredStories = [
    {
      title: "The Dream That Returned For Seven Years",
      description:
        "A recurring dream that eventually led to a real-life meeting and marriage.",
    },
    {
      title: "An Arranged Marriage That Felt Familiar",
      description:
        "Two strangers introduced by family who felt connected from the very first conversation.",
    },
    {
      title: "The Letter Written Before We Met",
      description:
        "A journal entry describing a future spouse years before their paths crossed.",
    },
  ];

  const signs = [
    "Recurring dreams about the same person",
    "Repeated numbers and synchronicities",
    "Instant familiarity during first meetings",
    "Strong intuition before meeting",
    "Shared life themes and lessons",
    "Unexpected coincidences leading together",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <Hero />

      {/* Introduction */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-purple-400 uppercase tracking-[0.3em] text-sm">
            A Living Collection
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Stories That Seem To Begin
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Before The First Meeting
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed">
            Across cultures, generations, and spiritual traditions,
            people describe experiences that challenge ordinary explanations.
            Dreams. Signs. Intuition. Familiarity. A feeling that someone
            important was already moving toward them long before they knew
            their name.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            ["1,200+", "Stories Shared"],
            ["40+", "Countries"],
            ["20,000+", "Readers"],
            ["100%", "Real Experiences"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-purple-400">
                {number}
              </h3>
              <p className="mt-3 text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SoulmateJourney />

      {/* Featured Stories */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Featured Stories
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Real experiences shared by people who believe their
              relationships began long before their first conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:border-purple-500/30 transition"
              >
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />

                <h3 className="text-2xl font-semibold mb-4">
                  {story.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {story.description}
                </p>

                <button className="mt-6 text-purple-400">
                  Read Story →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soulmate Signs */}
      <section className="py-28 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">
              Common Signs People Report
            </h2>

            <p className="text-gray-400 mt-6">
              While every journey is unique, certain experiences
              appear again and again.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {signs.map((sign) => (
              <div
                key={sign}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]"
              >
                ✨ {sign}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-3xl md:text-5xl italic font-light text-gray-200">
            “Perhaps the heart recognizes something
            the mind has not yet learned.”
          </p>

          <div className="mt-8 text-purple-400">
            — Before Her Name Existed
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-indigo-900/10 p-12 md:p-20">
          <h2 className="text-5xl font-bold mb-8">
            Why This Project Exists
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            This project was created to document real stories of
            soulmate recognition, future spouse dreams, spiritual
            signs, synchronicities, and meaningful relationships.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Not to prove. Not to convince. Not to argue.
            Simply to listen, preserve, and share extraordinary
            human experiences.
          </p>
        </div>
      </section>

      {/* Voices From The Community */}
      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent" />

        <div className="relative max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <span
              className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-2
          text-sm
          tracking-widest
          uppercase
          text-purple-300
        "
            >
              Shared Experiences
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
              Voices From The Community
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
              Every story collected here comes from real people who experienced
              dreams, synchronicities, unexpected recognition, spiritual moments,
              and relationships that felt familiar long before they began.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                quote:
                  "I dreamed about my future husband nearly five years before we met. The dream was so vivid that I wrote every detail in a journal. When we finally crossed paths, I recognized him immediately.",
                author: "Anonymous",
                location: "United States",
              },
              {
                quote:
                  "Our arranged marriage began with complete uncertainty, yet from the first conversation there was a strange sense of peace and familiarity. It felt less like meeting and more like remembering.",
                author: "Anonymous",
                location: "India",
              },
              {
                quote:
                  "I kept seeing the same number sequence for months. At the time it meant nothing to me. Later I realized those moments appeared during every major step that led me to my partner.",
                author: "Anonymous",
                location: "Canada",
              },
              {
                quote:
                  "For years I had recurring dreams about a city I had never visited. Eventually I moved there for work and met the person who would completely change my life.",
                author: "Anonymous",
                location: "Australia",
              },
              {
                quote:
                  "The familiarity was impossible to explain. We were strangers on paper, yet every conversation felt like a continuation of something that had already begun.",
                author: "Anonymous",
                location: "United Kingdom",
              },
              {
                quote:
                  "I experienced repeated synchronicities for nearly a year. Songs, places, dates, and symbols kept appearing in ways that seemed too precise to ignore.",
                author: "Anonymous",
                location: "Germany",
              },
              {
                quote:
                  "The first dream happened when I was nineteen. I saw a face I couldn't identify. Eleven years later I met someone whose smile matched the memory perfectly.",
                author: "Anonymous",
                location: "Singapore",
              },
              {
                quote:
                  "Nothing dramatic happened. There were no visions or signs. Yet from the first moment we met, I felt an unshakable certainty that our paths were meant to cross.",
                author: "Anonymous",
                location: "South Africa",
              },
              {
                quote:
                  "A notebook filled with dreams became one of the most important records of my life. Years later many of those details connected to events I could never have predicted.",
                author: "Anonymous",
                location: "New Zealand",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="
            group
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-purple-500/30
            hover:bg-white/[0.05]
            hover:-translate-y-1
          "
              >
                <div className="mb-6 text-5xl text-purple-400">
                  "
                </div>

                <p className="leading-relaxed text-gray-300 text-lg">
                  {story.quote}
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-medium text-white">
                    {story.author}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {story.location}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div
            className="
        mt-24
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        p-12
        md:p-16
        text-center
      "
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Your Story Matters Too
            </h3>

            <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Somewhere in the world, another person may have experienced
              something remarkably similar to what happened to you. By sharing
              your story, you contribute to a growing archive of dreams,
              synchronicities, intuition, meaningful encounters, and
              unexplained connections that deserve to be remembered.
            </p>

            <button
              className="
          mt-10
          rounded-full
          bg-white
          px-10
          py-4
          text-black
          font-semibold
          transition-all
          duration-300
          hover:scale-105
        "
            >
              Share Your Experience
            </button>
          </div>

        </div>
      </section>


      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-indigo-900/20 p-14">
          <h2 className="text-5xl font-bold">
            Did Your Story Begin Before The Meeting?
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Share dreams, soulmate recognition experiences,
            spiritual signs, synchronicities, and meaningful
            encounters that changed your life.
          </p>

          <Link
            href="/submit"
            className="inline-flex items-center justify-center mt-10 rounded-full bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition"
          >
            Share Your Story
          </Link>
        </div>
      </section>

      <CTA />

    </main>
  );
}