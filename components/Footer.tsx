import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Stories", href: "/stories" },
    { name: "Documentary", href: "/documentary" },
    { name: "Share Story", href: "/submit" },
    { name: "About", href: "/about" },
  ];

  const categories = [
    "Future Spouse Dreams",
    "Soulmate Recognition",
    "Past-Life Connections",
    "Spiritual Signs",
    "Synchronicities",
    "Arranged Marriage Stories",
  ];

  const resources = [
    "Community Stories",
    "Relationship Journeys",
    "Soul Connections",
    "Dream Experiences",
    "Destiny & Timing",
    "Love Across Time",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">
                Before Her Name Existed
              </h2>

              <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300" />
            </div>

            <p className="leading-relaxed text-gray-400">
              A collection of real stories exploring soulmate marriages,
              dreams, synchronicities, spiritual recognition, and the
              mysterious ways people find each other across time.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="italic text-gray-300">
                “I loved the story before I knew the character.”
              </p>

              <p className="mt-3 text-sm text-purple-400">
                — Before Her Name Existed
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-purple-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Story Categories */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Story Categories
            </h3>

            <ul className="space-y-4">
              {categories.map((category) => (
                <li
                  key={category}
                  className="text-gray-400 hover:text-pink-400 transition"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-4">
              {resources.map((resource) => (
                <li
                  key={resource}
                  className="text-gray-400 hover:text-yellow-300 transition"
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-indigo-900/10 p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                Community Updates
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Stay Connected With New Stories
              </h3>

              <p className="mt-4 text-gray-400">
                Receive updates when new soulmate experiences,
                dreams, spiritual signs, and relationship journeys
                are published.
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-4
                    text-white
                    placeholder:text-gray-500
                    outline-none
                  "
                />

                <button
                  className="
                    rounded-full
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">
          <h3 className="text-2xl md:text-4xl font-light italic text-gray-200">
            “Perhaps the heart recognizes something
            the mind has not yet learned.”
          </h3>

          <p className="mt-6 text-purple-400">
            A space for stories that seem to begin before the first meeting.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h4 className="text-4xl font-bold text-purple-400">
              1,200+
            </h4>

            <p className="mt-2 text-gray-500">
              Stories Shared
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h4 className="text-4xl font-bold text-pink-400">
              40+
            </h4>

            <p className="mt-2 text-gray-500">
              Countries
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h4 className="text-4xl font-bold text-yellow-300">
              20K+
            </h4>

            <p className="mt-2 text-gray-500">
              Readers
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h4 className="text-4xl font-bold text-indigo-400">
              ∞
            </h4>

            <p className="mt-2 text-gray-500">
              Possibilities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Before Her Name Existed.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="text-gray-500 hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-12 text-center">
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-600">
            Every relationship carries a story. Some begin with friendship.
            Some begin with family introductions. Some begin with unexpected
            encounters. And some begin years earlier—in dreams, journals,
            letters, poems, and unanswered questions.
          </p>
        </div>
      </div>
    </footer>
  );
}