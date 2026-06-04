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