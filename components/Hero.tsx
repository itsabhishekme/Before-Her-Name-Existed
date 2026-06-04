"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/stars.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Glows */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
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
                  tracking-[0.35em]
                  text-purple-300
                  backdrop-blur-md
                "
              >
                Real Soulmate Stories
              </span>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-none
                  text-white
                  md:text-7xl
                  xl:text-8xl
                "
              >
                Before Her
                <span
                  className="
                    mt-2
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
                  italic
                  text-gray-200
                "
              >
                “I loved the story before I knew the character.”
              </p>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-gray-400
                "
              >
                What if the most important person in your life entered
                your story long before you knew their name?
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-gray-500
                  leading-relaxed
                "
              >
                Across cultures, generations, and spiritual traditions,
                people describe dreams, signs, intuition, synchronicities,
                and a powerful sense of familiarity that appeared before
                they met the person who would later become their spouse.
              </p>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <Link
                  href="/stories"
                  className="
                    rounded-full
                    bg-white
                    px-10
                    py-5
                    text-center
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  Explore Stories
                </Link>

                <Link
                  href="/submit"
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    px-10
                    py-5
                    text-center
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/10
                  "
                >
                  Share Your Story
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  {
                    number: "1,200+",
                    label: "Stories",
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
                    label: "Connections",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      backdrop-blur-xl
                    "
                  >
                    <h3
                      className="
                        text-3xl
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

                    <p className="mt-2 text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden lg:block"
            >
              <div
                className="
                  relative
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                "
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />

                <div className="relative">
                  <div className="text-center">
                    <div className="text-8xl">✨</div>

                    <h2 className="mt-8 text-4xl font-bold">
                      Soulmate Recognition
                    </h2>

                    <p className="mt-4 text-gray-400">
                      Dreams • Signs • Recognition • Union
                    </p>
                  </div>

                  <div className="mt-12 space-y-6">
                    {[
                      {
                        icon: "🌙",
                        title: "Dreams",
                      },
                      {
                        icon: "✨",
                        title: "Signs",
                      },
                      {
                        icon: "💫",
                        title: "Recognition",
                      },
                      {
                        icon: "❤️",
                        title: "Union",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="
                          flex
                          items-center
                          gap-5
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/30
                          p-5
                        "
                      >
                        <span className="text-3xl">
                          {item.icon}
                        </span>

                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="text-sm text-gray-500">
                            Part of the soulmate journey
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-10
                      rounded-3xl
                      border
                      border-white/10
                      bg-black/30
                      p-6
                    "
                  >
                    <p className="italic text-gray-300">
                      “Perhaps the heart recognizes something
                      the mind has not yet learned.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          z-20
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            h-14
            w-8
            justify-center
            rounded-full
            border
            border-white/20
          "
        >
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white" />
        </div>

        <p className="mt-3 text-center text-xs uppercase tracking-widest text-gray-500">
          Scroll
        </p>
      </div>
    </section>
  );
}