import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-24">
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
            About The Project
          </span>

          <h1
            className="
              mt-8
              text-5xl
              md:text-7xl
              xl:text-8xl
              font-black
              leading-none
            "
          >
            Before Her
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
              Name Existed
            </span>
          </h1>

          <p
            className="
              mt-8
              text-xl
              md:text-2xl
              italic
              text-gray-300
            "
          >
            “I loved the story before I knew the character.”
          </p>

          <p
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            A digital archive dedicated to documenting real stories of
            soulmate recognition, future spouse dreams, spiritual signs,
            synchronicities, meaningful coincidences, and relationships
            that seemed to begin long before the first meeting.
          </p>
        </div>
      </section>


      {/* Main Story */}
      <section className="relative z-10 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        md:p-16
        backdrop-blur-xl
      "
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why This Project Exists
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-relaxed text-gray-400">

              <p>
                Throughout history, people from different countries,
                cultures, religions, and generations have reported
                experiences that seem to exist beyond ordinary explanation.
                These experiences are often deeply personal, emotionally
                powerful, and difficult to describe using conventional
                language.
              </p>

              <p>
                Some people dream of someone they have never met and later
                encounter a person who resembles that dream in unexpected
                ways. Others experience recurring symbols, repeated numbers,
                strange coincidences, or moments of familiarity that seem
                impossible to explain logically.
              </p>

              <p>
                There are stories of individuals who felt connected to
                someone long before a relationship began. Some describe
                dreams that occurred years before meeting a future spouse.
                Others speak of an immediate recognition when seeing a
                stranger for the first time, as though the connection
                already existed somewhere beyond memory.
              </p>

              <p>
                Many people have shared experiences involving intuition,
                synchronicities, spiritual encounters, recurring dreams,
                symbolic messages, unexplained emotions, or a persistent
                feeling that certain events in their lives were guiding
                them toward a future they could not yet see.
              </p>

              <p>
                While interpretations differ, these stories continue to
                appear across every corner of the world. Some view them
                through a spiritual lens. Others see them as psychological
                patterns, subconscious insights, meaningful coincidences,
                archetypal symbolism, or expressions of human intuition.
              </p>

              <p>
                Regardless of interpretation, the experiences themselves
                remain significant to the people who live them. They become
                part of personal histories, relationship journeys, and
                moments that shape how individuals understand themselves
                and the world around them.
              </p>

              <p>
                Yet many people never share these experiences publicly.
                They worry about being misunderstood, judged, dismissed,
                or told that what they experienced was not real. As a
                result, countless meaningful stories remain hidden in
                journals, private conversations, and personal memories.
              </p>

              <p>
                This project was created to provide a respectful space
                where those stories can be preserved. It is not designed
                to convince anyone of a particular belief system, religion,
                philosophy, or worldview. Instead, it exists as a living
                collection of human experiences.
              </p>

              <p>
                Every story submitted here represents a unique perspective.
                Some stories involve dreams. Some involve love. Some involve
                unexplained connections, recurring signs, spiritual moments,
                life-changing encounters, or profound feelings that cannot
                easily be put into words.
              </p>

              <p>
                We believe that stories matter even when answers remain
                uncertain. Human experience has always been one of the most
                valuable ways people learn, reflect, and connect with one
                another.
              </p>

              <p>
                By documenting these experiences, we create a place where
                future generations can explore recurring themes that have
                appeared across time and culture. Patterns may emerge.
                Questions may arise. Insights may develop. Yet the purpose
                remains preservation rather than conclusion.
              </p>

              <p>
                Whether your story involves a dream of a future spouse,
                recurring synchronicities, a feeling of destiny, an
                unexplainable recognition, or a profound personal
                experience that changed your life, your voice belongs
                within this collection.
              </p>

              <p>
                Every submission contributes to a growing archive of
                experiences that might otherwise disappear with time.
                Together these stories create a record of the mysteries,
                questions, hopes, connections, and moments that continue
                to inspire people around the world.
              </p>

              <p>
                This is not a place for certainty. It is a place for
                curiosity. It is a place for reflection. It is a place
                for stories that deserve to be remembered.
              </p>

              <div
                className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-black/20
            p-8
            text-center
          "
              >
                <p className="text-2xl italic text-gray-300">
                  “Some stories begin long before two people meet.”
                </p>

                <p className="mt-4 text-purple-400">
                  Before Her Name Existed
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              The Four Pillars
            </h2>

            <p className="mt-4 text-gray-400">
              Common themes found throughout soulmate stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: "🌙",
                title: "Dreams",
                desc:
                  "Recurring dreams, visions, symbols, and unexplained encounters before meeting.",
              },
              {
                icon: "✨",
                title: "Signs",
                desc:
                  "Repeated numbers, synchronicities, and meaningful coincidences.",
              },
              {
                icon: "💫",
                title: "Recognition",
                desc:
                  "The feeling of familiarity that appears during a first meeting.",
              },
              {
                icon: "❤️",
                title: "Union",
                desc:
                  "Relationships that lead to growth, purpose, and transformation.",
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
                  backdrop-blur-xl
                "
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 pb-24">
        <div className="max-w-6xl mx-auto px-6">
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
            "
          >
            <h2 className="text-5xl font-bold text-center">
              Our Mission
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold">
                  Preserve
                </h3>

                <p className="mt-4 text-gray-400">
                  Document meaningful stories before they disappear
                  with time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Connect
                </h3>

                <p className="mt-4 text-gray-400">
                  Help people discover others who have experienced
                  similar journeys.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Explore
                </h3>

                <p className="mt-4 text-gray-400">
                  Encourage thoughtful reflection about destiny,
                  intuition, and human connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Statistics */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["1,200+", "Stories Shared"],
              ["40+", "Countries"],
              ["20K+", "Readers"],
              ["∞", "Possibilities"],
            ].map(([number, label]) => (
              <div
                key={label}
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
                  {number}
                </h3>

                <p className="mt-3 text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-12
              md:p-20
              text-center
            "
          >
            <div className="text-6xl mb-8">
              ✨
            </div>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-light
                italic
                text-gray-200
              "
            >
              “Perhaps the heart recognizes something
              the mind has not yet learned.”
            </h2>

            <p className="mt-8 text-purple-400">
              Before Her Name Existed
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Share Your Story
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
              Dreams, soulmate recognition, synchronicities,
              spiritual signs, arranged marriages, love marriages,
              and meaningful relationships all have a place here.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:justify-center">
              <Link
                href="/submit"
                className="
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
                Share Your Story ✨
              </Link>

              <Link
                href="/stories"
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-10
                  py-5
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Read Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}