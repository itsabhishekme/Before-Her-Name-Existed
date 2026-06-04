"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Stories",
      href: "/stories",
    },
    {
      name: "Share Story",
      href: "/submit",
    },
    {
      name: "Documentory",
      href: "/documentory",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <>
      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-white/10
          bg-black/40
          backdrop-blur-2xl
        "
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >
                ✨
              </div>

              <div>
                <h1
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    text-white
                  "
                >
                  Before Her Name Existed
                </h1>

                <p
                  className="
                    hidden
                    md:block
                    text-xs
                    tracking-widest
                    uppercase
                    text-gray-500
                  "
                >
                  Soulmate Stories & Spiritual Connections
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-300
                    transition-all
                    duration-300
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/stories"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  text-gray-300
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                Explore Stories
              </Link>

              <Link
                href="/submit"
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Share Story
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
              "
            >
              {mobileMenu ? (
                <span className="text-xl text-white">✕</span>
              ) : (
                <span className="text-xl text-white">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div
            className="
              lg:hidden
              border-t
              border-white/10
              bg-black/90
              backdrop-blur-2xl
            "
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-6
                      py-4
                      text-gray-300
                      transition
                      hover:border-purple-500/30
                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/stories"
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-4
                    text-center
                    text-white
                  "
                >
                  Read Stories
                </Link>

                <Link
                  href="/submit"
                  className="
                    rounded-full
                    bg-white
                    px-6
                    py-4
                    text-center
                    font-semibold
                    text-black
                  "
                >
                  Share Your Story
                </Link>
              </div>

              <div
                className="
                  mt-10
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-purple-900/10
                  via-pink-900/10
                  to-indigo-900/10
                  p-6
                "
              >
                <p
                  className="
                    text-center
                    text-lg
                    italic
                    text-gray-300
                  "
                >
                  “I loved the story before I knew the character.”
                </p>

                <p
                  className="
                    mt-3
                    text-center
                    text-sm
                    text-purple-400
                  "
                >
                  Before Her Name Existed
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Navigation Badge */}
      <div
        className="
          fixed
          bottom-8
          right-8
          z-40
          hidden
          xl:block
        "
      >
        <div
          className="
            rounded-full
            border
            border-white/10
            bg-black/60
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <span className="text-sm text-gray-300">
            ✨ Soulmate Stories
          </span>
        </div>
      </div>
    </>
  );
}