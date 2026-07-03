import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Before Her Name Existed",
    template: "%s | Before Her Name Existed",
  },

  description:
    "Real Stories of Soulmate Marriages, Past-Life Connections, Dreams, Spiritual Recognition, and the Love That Waited Across Time.",

  keywords: [
    "Soulmate Stories",
    "Future Spouse Dreams",
    "Past Life Connections",
    "Spiritual Love",
    "Soul Recognition",
    "Destined Relationships",
    "Karmic Relationships",
    "Dreams About Future Spouse",

    // Soulmates
    "Signs You've Met Your Soulmate",
    "Soulmate Connection",
    "Twin Soul Journey",
    "Soulmate Energy",
    "Soulmate Synchronicities",
    "Soulmate Reunion",
    "How to Recognize Your Soulmate",
    "Soulmate Telepathy",
    "Soul Contract",
    "Soulmate Compatibility",

    // Future Spouse
    "Future Husband Dreams",
    "Future Wife Dreams",
    "Dreams About Your Future Partner",
    "Future Spouse Prediction",
    "Future Marriage Signs",
    "Who Is My Future Spouse",
    "Future Partner Reading",
    "Future Love Life",
    "Dream Interpretation Future Spouse",
    "Future Spouse Tarot",

    // Spiritual Love
    "Divine Love",
    "Sacred Union",
    "Spiritual Relationships",
    "Divine Timing in Love",
    "Manifesting True Love",
    "Higher Self Love",
    "Spiritual Soul Connection",
    "Heart Chakra Love",
    "Universe Signs About Love",
    "Spiritual Romance",

    // Past Lives & Karma
    "Past Life Love",
    "Past Life Soulmates",
    "Karmic Soulmate",
    "Past Life Marriage",
    "Past Life Memories",
    "Reincarnation Love Story",
    "Past Life Regression",
    "Karmic Lessons in Love",
    "Healing Karmic Relationships",
    "Soul Contracts in Relationships",

    // Dreams
    "Dream Meaning Love",
    "Prophetic Dreams",
    "Recurring Love Dreams",
    "Dream Symbolism Relationships",
    "Dream Messages",
    "Lucid Dreams About Love",
    "Spiritual Dream Meanings",
    "Dreams That Predict Marriage",
    "Dream Interpretation Romance",
    "Dream Signs From the Universe",

    // Manifestation
    "Law of Attraction Love",
    "Manifest Your Soulmate",
    "Manifesting Your Future Spouse",
    "Love Affirmations",
    "Relationship Manifestation",
    "Attracting Divine Love",
    "Love Visualization",
    "Manifesting Marriage",
    "Spiritual Manifestation",
    "Love Energy",

    // Astrology & Divination
    "Love Astrology",
    "Soulmate Astrology",
    "Marriage Astrology",
    "Birth Chart Compatibility",
    "Venus in Astrology",
    "Synastry Chart",
    "Twin Flame Astrology",
    "Tarot Love Reading",
    "Oracle Love Messages",
    "Numerology Love",

    // Twin Flames
    "Twin Flame Journey",
    "Twin Flame Signs",
    "Twin Flame Reunion",
    "Twin Flame Separation",
    "Twin Flame Awakening",
    "Divine Masculine",
    "Divine Feminine",
    "Twin Flame Connection",
    "Twin Flame Healing",
    "Twin Flame Dreams",

    // Spiritual Growth
    "Spiritual Awakening",
    "Higher Consciousness",
    "Energy Healing",
    "Meditation for Love",
    "Inner Healing",
    "Self Love Journey",
    "Universal Guidance",
    "Guardian Angel Messages",
    "Angel Numbers Love",
    "Law of Karma"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          bg-black
          text-white
          antialiased
          overflow-x-hidden
        "
      >
        {/* Cosmic Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Main Background */}
          <div className="absolute inset-0 bg-black" />

          {/* Purple Glow */}
          <div
            className="
              absolute
              left-0
              top-0
              h-[600px]
              w-[600px]
              rounded-full
              bg-purple-500/10
              blur-[140px]
            "
          />

          {/* Pink Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-[600px]
              w-[600px]
              rounded-full
              bg-pink-500/10
              blur-[140px]
            "
          />

          {/* Indigo Glow */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-indigo-500/10
              blur-[180px]
            "
          />

          {/* Grid Overlay */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              bg-[linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
              bg-[size:50px_50px]
            "
          />
        </div>

        {/* Floating Stars */}
        <div className="pointer-events-none fixed inset-0 -z-40">
          <div className="absolute left-[10%] top-[15%] text-white/20">
            ✦
          </div>
          <div className="absolute left-[25%] top-[35%] text-white/20">
            ✧
          </div>
          <div className="absolute left-[80%] top-[20%] text-white/20">
            ✦
          </div>
          <div className="absolute left-[65%] top-[55%] text-white/20">
            ✧
          </div>
          <div className="absolute left-[15%] top-[75%] text-white/20">
            ✦
          </div>
          <div className="absolute left-[90%] top-[80%] text-white/20">
            ✧
          </div>
        </div>

        {/* Navbar appears everywhere */}
        <Navbar />

        {/* Main Content */}
        <main
          className="
            relative
            z-10
            min-h-screen
            pt-24
          "
        >
          {children}
        </main>

        {/* Footer appears everywhere */}
        <Footer />
      </body>
    </html>
  );
}