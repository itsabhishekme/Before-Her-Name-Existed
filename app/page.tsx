import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SoulmateJourney from "@/components/SoulmateJourney";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
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

      {/* Testimonial Style */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-16">
            Voices From The Community
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "I dreamed about my husband years before we met.",
              "Our arranged marriage felt like a reunion.",
              "The familiarity was impossible to explain.",
            ].map((quote) => (
              <div
                key={quote}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="italic text-gray-300 leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
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