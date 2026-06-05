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
              <h3 className="text-4xl font-bold">11%</h3>
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

      {/* JOURNEY THROUGH TIME */}

      <section className="relative py-40 overflow-hidden">

        {/* BACKGROUND EFFECTS */}

        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-700/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}

          <div className="text-center mb-32">

            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">

              <Sparkles className="h-4 w-4" />

              DOCUMENTARY EVOLUTION

            </span>

            <h2 className="mt-10 text-6xl md:text-8xl font-black tracking-tight">
              Journey Through Time
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
              Every great story begins long before it becomes visible.
              What appears to be a single moment is often years of preparation,
              growth, discovery, setbacks and transformation.
            </p>

          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-4 gap-8 mb-32">

            {[
              ["4", "Major Stages"],
              ["8", "Story Chapters"],
              ["11%", "Production"],
              ["∞", "Possibilities"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          text-center
          "
              >

                <h3 className="text-5xl font-black">
                  {value}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {label}
                </p>

              </div>

            ))}

          </div>

          {/* TIMELINE */}

          <div className="relative">

            {/* CENTER LINE */}

            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">

              <div className="h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            </div>

            <div className="space-y-32">

              {[
                {
                  year: "2024",
                  title: "The First Idea",
                  description:
                    "The earliest questions emerged around destiny, timing, relationships and personal evolution. A simple curiosity slowly transformed into a larger narrative.",
                  tag: "Beginning",
                },
                {
                  year: "2025",
                  title: "Research & Discovery",
                  description:
                    "Interviews, journals, dreams, symbolism and human stories began shaping the documentary's deeper meaning and emotional direction.",
                  tag: "Exploration",
                },
                {
                  year: "2026",
                  title: "Production Phase",
                  description:
                    "Visual storytelling, cinematic language, editing concepts and narrative structures entered active development.",
                  tag: "Creation",
                },
                {
                  year: "2027",
                  title: "Worldwide Release",
                  description:
                    "The completed story reaches audiences around the world, inviting viewers to reflect on their own unseen journeys.",
                  tag: "Release",
                },
              ].map((item, index) => (

                <div
                  key={item.title}
                  className={`
            grid
            lg:grid-cols-2
            gap-16
            items-center
            ${index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                    }
            `}
                >

                  {/* CONTENT CARD */}

                  <div
                    className="
              group
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-12
              hover:border-white/20
              transition-all
              duration-700
              "
                  >

                    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    <div className="relative z-10">

                      <span
                        className="
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  px-4
                  py-2
                  text-xs
                  tracking-[0.2em]
                  uppercase
                  "
                      >
                        {item.tag}
                      </span>

                      <div className="mt-8 text-zinc-500 tracking-[0.3em] uppercase">
                        {item.year}
                      </div>

                      <h3 className="mt-4 text-4xl md:text-5xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-10 flex gap-3 flex-wrap">

                        <span className="rounded-full bg-white/5 px-4 py-2 text-sm">
                          Storytelling
                        </span>

                        <span className="rounded-full bg-white/5 px-4 py-2 text-sm">
                          Destiny
                        </span>

                        <span className="rounded-full bg-white/5 px-4 py-2 text-sm">
                          Human Journey
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* TIMELINE NODE */}

                  <div className="hidden lg:flex justify-center">

                    <div className="relative">

                      <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />

                      <div
                        className="
                  relative
                  h-36
                  w-36
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  "
                      >

                        <span className="text-4xl font-black">
                          {index + 1}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* FINAL QUOTE */}

          <div className="mt-40 text-center">

            <p className="text-zinc-500 tracking-[0.4em] uppercase">
              Documentary Theme
            </p>

            <h3 className="mt-8 text-4xl md:text-6xl font-black max-w-5xl mx-auto leading-tight">
              Every meeting begins long before
              two paths finally cross.
            </h3>

          </div>

        </div>

      </section>

      
      {/* FINAL RELEASE SECTION */}

      <section className="relative py-48 overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-blue-950/30" />

        <div className="absolute top-0 left-0 h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-cyan-600/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="text-center">

            <div
              className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        px-8
        py-4
        "
            >
              <Globe className="h-5 w-5" />

              <span className="tracking-[0.3em] text-sm uppercase">
                Worldwide Release
              </span>
            </div>

            <h2
              className="
        mt-12
        text-7xl
        md:text-9xl
        font-black
        leading-none
        tracking-tight
        "
            >
              COMING
              <br />
              SOON
            </h2>

            <p className="mt-10 text-3xl text-zinc-300">
              The story is still unfolding.
            </p>

            <p
              className="
        mt-8
        max-w-4xl
        mx-auto
        text-zinc-500
        text-xl
        leading-relaxed
        "
            >
              Every great meeting begins before it becomes visible.
              Every transformation starts long before it can be seen.
              This documentary continues to evolve through research,
              visual storytelling, reflection and cinematic exploration.
            </p>

          </div>

          {/* COUNTDOWN BLOCKS */}

          <div className="mt-32 grid md:grid-cols-4 gap-8">

            {[
              ["365", "Days"],
              ["52", "Weeks"],
              ["12", "Months"],
              ["∞", "Possibilities"],
            ].map(([number, label]) => (

              <div
                key={label}
                className="
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
          text-center
          hover:border-white/20
          transition-all
          duration-500
          "
              >

                <h3 className="text-6xl font-black">
                  {number}
                </h3>

                <p className="mt-4 text-zinc-500 uppercase tracking-[0.2em]">
                  {label}
                </p>

              </div>

            ))}

          </div>

          {/* PRODUCTION STATUS */}

          <div className="mt-40">

            <div className="text-center mb-16">

              <h3 className="text-5xl font-black">
                Production Status
              </h3>

              <p className="mt-6 text-zinc-500">
                Current documentary development progress.
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Story Development",
                  progress: "11%",
                  description:
                    "Narrative structure and documentary themes completed.",
                },
                {
                  title: "Visual Production",
                  progress: "0%",
                  description:
                    "Cinematic sequences and visual storytelling underway.",
                },
                {
                  title: "Global Release",
                  progress: "0%",
                  description:
                    "Preparing future screenings and audience experience.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            "
                >

                  <div className="text-zinc-500 text-sm uppercase tracking-[0.2em]">
                    Progress
                  </div>

                  <h4 className="mt-4 text-4xl font-black">
                    {item.progress}
                  </h4>

                  <h5 className="mt-8 text-2xl font-bold">
                    {item.title}
                  </h5>

                  <p className="mt-4 text-zinc-400">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RELEASE MESSAGE */}

          <div className="mt-40">

            <div
              className="
        rounded-[48px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.04]
        to-white/[0.01]
        p-16
        text-center
        "
            >

              <div className="text-zinc-500 tracking-[0.4em] uppercase">
                Final Message
              </div>

              <h3
                className="
          mt-8
          text-5xl
          md:text-7xl
          font-black
          max-w-5xl
          mx-auto
          leading-tight
          "
              >
                Some stories begin
                years before they
                are finally told.
              </h3>

              <p
                className="
          mt-10
          max-w-3xl
          mx-auto
          text-zinc-400
          text-xl
          leading-relaxed
          "
              >
                This documentary is more than a story about two paths crossing.
                It is a reflection on timing, growth, preparation, memory,
                destiny and the invisible forces that shape our lives.
              </p>

            </div>

          </div>

          {/* EMAIL CTA */}

          <div className="mt-32 text-center">

            <h3 className="text-4xl font-black">
              Stay Updated
            </h3>

            <p className="mt-4 text-zinc-500">
              Be among the first to hear about the release.
            </p>

            <div className="mt-10 flex justify-center flex-wrap gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="
          w-[320px]
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-8
          py-4
          outline-none
          "
              />

              <button
                className="
          rounded-full
          bg-white
          text-black
          px-10
          py-4
          font-bold
          hover:scale-105
          transition-all
          "
              >
                Notify Me
              </button>

            </div>

          </div>

          {/* RELEASE BADGE */}

          <div className="mt-24 flex justify-center">

            <div
              className="
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-10
        py-5
        backdrop-blur-xl
        text-lg
        "
            >
              Release Date To Be Announced
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
   CINEMATIC COMING SOON EXPERIENCE
   ========================================================= */}

      <section className="relative min-h-screen overflow-hidden py-52">

        {/* ---------------------------------------------------------
      BACKGROUND LAYERS
  --------------------------------------------------------- */}

        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_40%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/70 to-black" />

        {/* Cosmic Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1000px] w-[1000px] rounded-full bg-purple-700/10 blur-[220px]" />

        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-700/10 blur-[200px]" />

        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[180px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">

          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}

        </div>

        {/* Floating Rings */}

        <div className="absolute top-40 left-20 h-72 w-72 rounded-full border border-white/5" />

        <div className="absolute top-60 left-36 h-96 w-96 rounded-full border border-white/[0.03]" />

        <div className="absolute bottom-40 right-20 h-[500px] w-[500px] rounded-full border border-white/[0.03]" />

        {/* ---------------------------------------------------------
      CONTENT
  --------------------------------------------------------- */}

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Header Badge */}

          <div className="flex justify-center">

            <div className="group relative">

              <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />

              <div className="relative rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-8 py-3">

                <span className="uppercase tracking-[0.4em] text-xs text-zinc-300">
                  Documentary In Production
                </span>

              </div>

            </div>

          </div>

          {/* Icon */}

          <div className="mt-20 flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[100px]" />

              <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/10" />

              <div className="relative h-36 w-36 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-3xl flex items-center justify-center">

                <Globe className="h-16 w-16 text-white" />

              </div>

            </div>

          </div>

          {/* Main Heading */}

          <div className="mt-20 text-center">

            <div className="overflow-hidden">

              <h2 className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-[-0.08em] leading-none">

                <span className="block text-white">
                  GLOBAL
                </span>

                <span className="block bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
                  RELEASE
                </span>

              </h2>

            </div>

            <div className="mt-10 flex justify-center">
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

          </div>

          {/* Intro Narrative */}

          <div className="mt-20 max-w-5xl mx-auto text-center">

            <p className="text-3xl md:text-5xl font-light leading-relaxed text-white">

              The story is still unfolding.

            </p>

            <p className="mt-10 text-xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">

              Some stories begin before memory.
              Before photographs.
              Before introductions.
              Before names are exchanged.

            </p>

            <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-4xl mx-auto">

              Hidden beneath everyday moments are invisible threads —
              quiet coincidences, dreams, unanswered questions,
              unexpected signs, and emotions that slowly shape a future
              no one can yet see.

            </p>

          </div>

          {/* Feature Film Quote Card */}

          <div className="mt-32 max-w-6xl mx-auto">

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />

              <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

              <div className="relative px-12 py-24 md:px-24">

                <div className="text-center">

                  <div className="text-[120px] leading-none text-white/10">
                    "
                  </div>

                  <h3 className="text-3xl md:text-5xl font-light leading-relaxed text-white">

                    Every meeting starts long before
                    two paths finally cross.

                  </h3>

                  <div className="mt-10 flex justify-center">
                    <div className="h-px w-32 bg-white/20" />
                  </div>

                  <p className="mt-10 text-zinc-500 uppercase tracking-[0.3em] text-sm">
                    Documentary Narration
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Timeline Section */}

          <div className="mt-40">

            <div className="text-center mb-24">

              <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs">
                Journey Timeline
              </p>

              <h3 className="mt-6 text-5xl font-bold">
                Behind The Creation
              </h3>

            </div>

            <div className="grid md:grid-cols-4 gap-10">

              {[
                {
                  title: "Inspiration",
                  desc: "The first spark that started the journey.",
                  status: "Completed",
                },
                {
                  title: "Research",
                  desc: "Exploring memories, stories and meaning.",
                  status: "Completed",
                },
                {
                  title: "Production",
                  desc: "Crafting visuals and cinematic narrative.",
                  status: "In Progress",
                },
                {
                  title: "Release",
                  desc: "The final chapter shared with the world.",
                  status: "Upcoming",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 transition duration-700 hover:-translate-y-3"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-purple-500/10 to-transparent" />

                  <div className="relative">

                    <div className="h-16 w-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>

                    <h4 className="mt-8 text-2xl font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
                      {item.status}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-40 grid md:grid-cols-3 gap-10">

            {[
              ["100+", "Hours of Story Development"],
              ["Countless", "Moments Remembered"],
              ["1", "Journey Being Told"],
            ].map(([number, label], index) => (
              <div
                key={index}
                className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center"
              >
                <h4 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {number}
                </h4>

                <p className="mt-5 text-zinc-400">
                  {label}
                </p>
              </div>
            ))}

          </div>

          {/* Final Release Card */}

          <div className="mt-40">

            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />

              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

              <div className="relative px-10 py-24 md:px-24 text-center">

                <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                  Release Information
                </p>

                <h3 className="mt-8 text-5xl md:text-7xl font-black">

                  To Be Announced

                </h3>

                <p className="mt-10 text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">

                  The documentary is being carefully crafted,
                  frame by frame and story by story,
                  to create an experience that captures
                  what cannot normally be seen —
                  the invisible journey before destiny arrives.

                </p>

                <div className="mt-16">

                  <button className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.05] px-10 py-5 backdrop-blur-xl transition duration-700 hover:scale-105">

                    <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-600 to-blue-600 transition duration-700 group-hover:translate-y-0" />

                    <span className="relative z-10 tracking-[0.2em] uppercase text-sm">
                      Stay Tuned
                    </span>

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}