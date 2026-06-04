"use client";

import { motion } from "framer-motion";

export default function SoulmateJourney() {
  const journeySteps = [
    {
      icon: "🌙",
      title: "Dreams",
      subtitle: "The First Whisper",
      description:
        "For many people, the journey begins long before a meeting. Through recurring dreams, familiar faces, unexplained emotions, and symbolic experiences, they sense the presence of someone important moving toward their life.",
      quote:
        "I saw the same person for years before I ever knew their name.",
    },
    {
      icon: "✨",
      title: "Signs",
      subtitle: "The Language of Synchronicity",
      description:
        "Repeated numbers, meaningful coincidences, unexpected encounters, and moments that seem too perfectly timed often become part of the story. These experiences create a feeling that something larger may be unfolding.",
      quote:
        "The signs appeared everywhere, long before I understood their meaning.",
    },
    {
      icon: "💫",
      title: "Recognition",
      subtitle: "A Familiar Stranger",
      description:
        "When the meeting finally happens, many describe an immediate sense of familiarity. It feels less like meeting someone new and more like remembering someone forgotten.",
      quote:
        "I felt like I already knew them from somewhere I couldn't explain.",
    },
    {
      icon: "❤️",
      title: "Union",
      subtitle: "The Shared Journey",
      description:
        "Marriage, partnership, friendship, and personal growth transform the connection into a shared path. The relationship becomes not only about love but also about learning, healing, and purpose.",
      quote:
        "The relationship changed who I was and who I could become.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
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
            Soulmate Journey
          </span>

          <h2
            className="
              mt-8
              text-4xl
              md:text-6xl
              font-bold
            "
          >
            The Journey Of
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
              Recognition
            </span>
          </h2>

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
            Across thousands of soulmate stories, people often describe
            a surprisingly similar pattern. The details differ, but the
            emotional journey frequently follows the same path:
            dreams, signs, recognition, and ultimately a shared life.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-purple-500/30
              via-pink-500/30
              to-yellow-300/30
              lg:block
            "
          />

          <div className="space-y-24">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className={`
                  relative
                  grid
                  items-center
                  gap-12
                  lg:grid-cols-2
                  ${
                    index % 2 === 0
                      ? ""
                      : "lg:[&>*:first-child]:order-2"
                  }
                `}
              >
                {/* Content */}
                <div
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    md:p-10
                    backdrop-blur-xl
                  "
                >
                  <div className="text-5xl">
                    {step.icon}
                  </div>

                  <div className="mt-6">
                    <span className="text-purple-400 text-sm uppercase tracking-widest">
                      Stage {index + 1}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold">
                      {step.title}
                    </h3>

                    <h4 className="mt-2 text-lg text-gray-400">
                      {step.subtitle}
                    </h4>

                    <p className="mt-6 leading-relaxed text-gray-400">
                      {step.description}
                    </p>

                    <div
                      className="
                        mt-8
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/30
                        p-5
                      "
                    >
                      <p className="italic text-gray-300">
                        "{step.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Card */}
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
                    text-center
                  "
                >
                  <div className="text-7xl mb-6">
                    {step.icon}
                  </div>

                  <h3 className="text-4xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {step.subtitle}
                  </p>

                  <div
                    className="
                      mt-8
                      mx-auto
                      h-1
                      w-24
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-yellow-300
                    "
                  />
                </div>

                {/* Timeline Node */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border-4
                    border-black
                    bg-gradient-to-r
                    from-purple-500
                    via-pink-500
                    to-yellow-300
                    lg:block
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Reflection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            mt-32
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-12
            md:p-20
            text-center
            backdrop-blur-xl
          "
        >
          <div className="text-6xl mb-8">✨</div>

          <h3 className="text-4xl md:text-5xl font-bold">
            Every Story Is Different.
          </h3>

          <h4
            className="
              mt-3
              text-2xl
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
            "
          >
            Yet The Pattern Often Feels Familiar.
          </h4>

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
            Some relationships begin with friendship.
            Some begin through family introductions.
            Some begin unexpectedly.
            And some appear to begin years earlier,
            inside dreams, journals, letters, poems,
            and unanswered questions.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-xl
              italic
              text-gray-300
            "
          >
            "Perhaps the heart recognizes something
            the mind has not yet learned."
          </p>
        </motion.div>
      </div>
    </section>
  );
}