import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-10
            md:p-20
          "
        >
          {/* Badge */}
          <div className="flex justify-center">
            <span
              className="
                rounded-full
                border
                border-purple-500/30
                bg-purple-500/10
                px-5
                py-2
                text-sm
                tracking-widest
                uppercase
                text-purple-300
              "
            >
              Share Your Journey
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-8
              text-center
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            Did Your Story Begin
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
              Before The Meeting?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Across the world, people describe dreams, intuition,
            synchronicities, recurring symbols, and powerful feelings
            of familiarity that appeared before they met the person who
            would later become their spouse or life partner.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-center
              text-gray-500
              leading-relaxed
            "
          >
            Whether your relationship began through a love marriage,
            an arranged marriage, friendship, coincidence, or an
            unexpected encounter, your experience may help others
            understand their own journey.
          </p>

          {/* Features */}
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              "Future Spouse Dreams",
              "Soulmate Recognition",
              "Past-Life Connections",
              "Spiritual Signs",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  text-center
                  transition
                  duration-300
                  hover:border-purple-500/30
                  hover:bg-white/[0.04]
                "
              >
                <div className="mb-3 text-2xl">✨</div>
                <h3 className="font-medium text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16">
            <div
              className="
                mx-auto
                max-w-4xl
                rounded-3xl
                border
                border-white/10
                bg-black/30
                p-8
                text-center
              "
            >
              <p
                className="
                  text-xl
                  md:text-3xl
                  italic
                  font-light
                  text-gray-200
                "
              >
                “I loved the story before I knew the character.”
              </p>

              <div className="mt-4 text-purple-400">
                Before Her Name Existed
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >
            <Link
              href="/submit"
              className="
                rounded-full
                bg-white
                px-10
                py-4
                font-semibold
                text-black
                transition
                duration-300
                hover:scale-105
              "
            >
              Share Your Story
            </Link>

            <Link
              href="/stories"
              className="
                rounded-full
                border
                border-white/15
                px-10
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:border-purple-500/40
                hover:bg-white/5
              "
            >
              Read Stories
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <h4 className="text-3xl font-bold text-purple-400">
                  1,200+
                </h4>
                <p className="mt-2 text-gray-500">
                  Stories Shared
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-pink-400">
                  40+
                </h4>
                <p className="mt-2 text-gray-500">
                  Countries
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-yellow-300">
                  20K+
                </h4>
                <p className="mt-2 text-gray-500">
                  Readers
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-indigo-400">
                  ∞
                </h4>
                <p className="mt-2 text-gray-500">
                  Possibilities
                </p>
              </div>
            </div>
          </div>

          {/* Closing Text */}
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-gray-500">
              Perhaps your story began with a dream.
              Perhaps with a sign.
              Perhaps with a feeling you could never explain.
              Or perhaps it began long before either of you knew
              the other existed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}