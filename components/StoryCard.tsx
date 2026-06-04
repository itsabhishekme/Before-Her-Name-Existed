"use client";

import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  readTime?: string;
  image?: string;
  featured?: boolean;
};

export default function StoryCard({
  title,
  excerpt,
  category = "Soulmate Recognition",
  author = "Anonymous",
  readTime = "5 min read",
  image,
  featured = false,
}: Props) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-purple-500/30
        hover:bg-white/[0.05]
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-5 top-5 z-20">
          <span
            className="
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-4
              py-2
              text-xs
              uppercase
              tracking-widest
              text-yellow-300
            "
          >
            Featured Story
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={
            image ||
            "/images/soulmate.jpg"
          }
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span
            className="
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-4
              py-2
              text-xs
              uppercase
              tracking-widest
              text-purple-300
              backdrop-blur-md
            "
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Meta */}
        <div className="mb-5 flex items-center gap-4 text-sm text-gray-500">
          <span>👤 {author}</span>
          <span>•</span>
          <span>📖 {readTime}</span>
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            md:text-3xl
            font-bold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-purple-300
          "
        >
          {title}
        </h3>

        {/* Divider */}
        <div
          className="
            mt-5
            h-1
            w-16
            rounded-full
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-yellow-300
          "
        />

        {/* Excerpt */}
        <p
          className="
            mt-6
            leading-relaxed
            text-gray-400
            line-clamp-4
          "
        >
          {excerpt}
        </p>

        {/* Quote Block */}
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
            “Some stories feel familiar before they begin.”
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Soulmate",
            "Dreams",
            "Recognition",
          ].map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-xs
                text-gray-400
              "
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-6
          "
        >
          <div>
            <p className="text-sm text-gray-500">
              Shared Experience
            </p>

            <p className="text-white">
              Real Story Collection
            </p>
          </div>

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
              font-medium
              text-white
              transition
              hover:border-purple-500/30
              hover:bg-white/[0.05]
            "
          >
            Read Story →
          </Link>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          h-[2px]
          w-full
          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-yellow-300
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </article>
  );
}