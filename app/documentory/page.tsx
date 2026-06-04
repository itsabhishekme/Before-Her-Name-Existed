import type { Metadata } from "next";
import {
  Film,
  Clock,
  Heart,
  Sparkles,
  Camera,
  Globe,
  Star,
  PlayCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Before We Met, We Were Becoming | Documentary",
  description:
    "A cinematic documentary exploring destiny, soul recognition, timing, and the invisible paths that lead two people toward each other.",
};

const milestones = [
  {
    title: "Story Research",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Narrative Development",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Documentary Production",
    status: "In Progress",
    progress: 75,
  },
  {
    title: "Visual Storytelling",
    status: "In Progress",
    progress: 68,
  },
  {
    title: "Final Release",
    status: "Upcoming",
    progress: 15,
  },
];

const chapters = [
  "The Life Before Recognition",
  "The Invisible Preparation",
  "Dreams Before Meeting",
  "The Language of Synchronicity",
  "Soul Memory",
  "Crossroads and Timing",
  "When Paths Begin Converging",
  "The Becoming",
];

export default function DocumentaryPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://df89zudyl91we6wr.public.blob.vercel-storage.com/Before%20We%20Met%2C%20We%20Were%20Becoming.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />

        <div className="relative z-20 max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">
            <Film className="h-4 w-4" />
            <span>DOCUMENTARY IN PRODUCTION</span>
          </div>

          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none">
            Before We Met,
            <br />
            We Were Becoming
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-300 leading-relaxed">
            A cinematic exploration of destiny, growth, timing,
            synchronicities, and the mysterious journey that prepares two
            souls long before they recognize each other.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <button className="rounded-full bg-white text-black px-8 py-4 font-semibold flex items-center gap-3">
              <PlayCircle />
              Watch Teaser
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 backdrop-blur-xl">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* STATUS */}

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl bg-zinc-900 p-8">
              <Clock className="mb-4" />
              <h3 className="text-4xl font-bold">75%</h3>
              <p className="text-zinc-400 mt-2">Production Progress</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 p-8">
              <Heart className="mb-4" />
              <h3 className="text-4xl font-bold">8</h3>
              <p className="text-zinc-400 mt-2">Story Chapters</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 p-8">
              <Camera className="mb-4" />
              <h3 className="text-4xl font-bold">2026</h3>
              <p className="text-zinc-400 mt-2">Production Year</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 p-8">
              <Sparkles className="mb-4" />
              <h3 className="text-4xl font-bold">∞</h3>
              <p className="text-zinc-400 mt-2">Possibilities</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-6xl font-black">
              The Story Behind The Story
            </h2>

            <p className="mt-10 text-zinc-400 text-xl leading-relaxed max-w-4xl mx-auto">
              This documentary explores a question many people have asked
              themselves:
              <br />
              <br />
              Were we already becoming the people we needed to be before we
              met the person who would change our lives forever?
            </p>
          </div>

        </div>
      </section>

      {/* CHAPTERS */}

      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-20">
            Documentary Chapters
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => (
              <div
                key={chapter}
                className="rounded-3xl border border-white/10 bg-black p-8"
              >
                <div className="text-zinc-500 text-sm">
                  CHAPTER {index + 1}
                </div>

                <h3 className="text-3xl font-bold mt-3">
                  {chapter}
                </h3>

                <p className="mt-4 text-zinc-400">
                  Exploring the hidden forces that guide lives,
                  relationships, and spiritual evolution.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROGRESS */}

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-20">
            Production Journey
          </h2>

          <div className="space-y-10">

            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-zinc-900 p-8"
              >
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold text-xl">
                    {item.title}
                  </h3>

                  <span className="text-zinc-400">
                    {item.status}
                  </span>
                </div>

                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COMING SOON */}

      <section className="relative py-40 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-blue-950/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <Globe className="mx-auto h-16 w-16 mb-8" />

          <h2 className="text-7xl font-black">
            COMING SOON
          </h2>

          <p className="mt-8 text-2xl text-zinc-300">
            The story is still unfolding.
          </p>

          <p className="mt-4 text-zinc-500 max-w-3xl mx-auto">
            Every journey begins before it becomes visible.
            Every meeting starts long before two paths cross.
            This documentary is currently being crafted to capture that
            invisible journey.
          </p>

          <div className="mt-16 flex justify-center">
            <div className="rounded-full border border-white/20 px-8 py-4 bg-white/5 backdrop-blur-xl">
              Release Date To Be Announced
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}