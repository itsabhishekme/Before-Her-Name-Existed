import StoryForm from "@/components/StoryForm";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-purple-500/30
              bg-purple-500/10
              px-6
              py-3
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-300
            "
          >
            Community Stories
          </span>

          <h1
            className="
              mt-8
              text-5xl
              md:text-7xl
              xl:text-8xl
              font-black
            "
          >
            Share Your
            <span
              className="
                block
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-yellow-300
                bg-clip-text
                text-transparent
              "
            >
              Story
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Have you experienced dreams, soulmate recognition,
            synchronicities, spiritual signs, or an unexplained feeling
            that someone important was already part of your story before
            you met them?
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-gray-500
              leading-relaxed
            "
          >
            Your experience may help others understand their own journey.
            Every story shared becomes part of a growing collection of
            real human experiences exploring love, destiny, intuition,
            and meaningful connection.
          </p>
        </div>
      </section>

      {/* Story Categories */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🌙",
                title: "Future Spouse Dreams",
                description:
                  "Dreams or visions that appeared before meeting.",
              },
              {
                icon: "✨",
                title: "Spiritual Signs",
                description:
                  "Repeated symbols, synchronicities, and meaningful coincidences.",
              },
              {
                icon: "💫",
                title: "Soulmate Recognition",
                description:
                  "Feeling familiar from the very first meeting.",
              },
              {
                icon: "❤️",
                title: "Marriage Journeys",
                description:
                  "Love marriages, arranged marriages, and destiny stories.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  text-center
                  backdrop-blur-xl
                "
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-12
              md:p-16
              text-center
              backdrop-blur-xl
            "
          >
            <div className="mb-6 text-6xl">
              ✨
            </div>

            <h2
              className="
                text-2xl
                md:text-4xl
                font-light
                italic
                text-gray-200
              "
            >
              “Perhaps your story began before the meeting.
              Perhaps it began with a dream, a sign,
              or a feeling you could never explain.”
            </h2>

            <p className="mt-8 text-purple-400">
              Before Her Name Existed
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              md:p-10
              backdrop-blur-xl
            "
          >
            <StoryForm />
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="relative z-10 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Submission Guidelines
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Be Authentic",
                description:
                  "Share real experiences and personal insights from your journey.",
              },
              {
                title: "Include Details",
                description:
                  "Dreams, signs, emotions, synchronicities, and meaningful moments help tell your story.",
              },
              {
                title: "Respect Privacy",
                description:
                  "Personal details can be omitted or anonymized before publication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                "
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                number: "1,200+",
                label: "Stories Shared",
              },
              {
                number: "40+",
                label: "Countries",
              },
              {
                number: "20K+",
                label: "Readers",
              },
              {
                number: "∞",
                label: "Possibilities",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  text-center
                "
              >
                <h3
                  className="
                    text-4xl
                    font-bold
                    bg-gradient-to-r
                    from-purple-400
                    via-pink-400
                    to-yellow-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-purple-900/10
              via-pink-900/10
              to-indigo-900/10
              p-12
              md:p-20
              text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Read More Stories
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                text-gray-400
              "
            >
              Explore dreams, soulmate recognition,
              spiritual signs, and remarkable journeys
              shared by people from around the world.
            </p>

            <Link
              href="/stories"
              className="
                inline-flex
                items-center
                justify-center
                mt-10
                rounded-full
                bg-white
                px-10
                py-5
                text-lg
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Explore Stories ✨
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}