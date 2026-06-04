"use client";

import { useState } from "react";

export default function StoryForm() {
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Future Spouse Dream",
    "Soulmate Recognition",
    "Past-Life Connection",
    "Spiritual Signs",
    "Synchronicities",
    "Arranged Marriage",
    "Love Marriage",
    "Destiny Experience",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div
        className="
          relative
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          md:p-12
          backdrop-blur-xl
        "
      >
        {/* Header */}
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-purple-500/30
              bg-purple-500/10
              px-5
              py-2
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-300
            "
          >
            Share Your Experience
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white">
            Tell Your
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
              Soulmate Story
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Have you experienced dreams, signs, synchronicities,
            soulmate recognition, or a connection that felt destined?
            Your story may help others understand their own journey.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div
            className="
              mt-10
              rounded-3xl
              border
              border-green-500/20
              bg-green-500/10
              p-5
              text-center
            "
          >
            <p className="text-green-300">
              ✨ Thank you for sharing your story. Your experience
              has been received.
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8"
        >
          {/* Personal Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Personal Information
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition
                  focus:border-purple-500/40
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition
                  focus:border-purple-500/40
                "
              />
            </div>
          </div>

          {/* Story Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Story Details
            </h3>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Story Title"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition
                  focus:border-purple-500/40
                "
              />

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-purple-500/40
                "
              >
                <option value="">Select Category</option>

                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-black"
                  >
                    {category}
                  </option>
                ))}
              </select>

              <textarea
                rows={12}
                required
                placeholder="Share your story in as much detail as you'd like. Describe dreams, signs, feelings of familiarity, synchronicities, spiritual experiences, or anything meaningful connected to your relationship journey..."
                className="
                  w-full
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-5
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  transition
                  focus:border-purple-500/40
                "
              />
            </div>
          </div>

          {/* Experience Checklist */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Which experiences relate to your story?
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Future Spouse Dream",
                "Soulmate Recognition",
                "Past-Life Connection",
                "Repeated Signs",
                "Spiritual Experience",
                "Strong Intuition",
                "Synchronicities",
                "Destiny Feeling",
              ].map((item) => (
                <label
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    text-gray-300
                    cursor-pointer
                  "
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-black/30
              p-8
              text-center
            "
          >
            <p className="text-2xl italic text-gray-300">
              “Perhaps your story began before the meeting.”
            </p>

            <p className="mt-4 text-purple-400">
              Before Her Name Existed
            </p>
          </div>

          {/* Agreement */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <label className="flex gap-4">
              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <span className="text-gray-400">
                I confirm that this story is based on my own
                experience and I grant permission for it to be
                published on the website, with personal information
                removed if necessary.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="
                rounded-full
                bg-white
                px-12
                py-5
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Submit Your Story ✨
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="mx-auto max-w-2xl text-sm text-gray-500">
              Every story matters. Whether your experience involved
              dreams, signs, intuition, or a feeling of familiarity,
              your journey may help someone else understand their own.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}