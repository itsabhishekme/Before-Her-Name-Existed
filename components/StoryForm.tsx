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
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <input
                type="number"
                placeholder="Age"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <select
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-purple-500/40"
              >
                <option value="">Relationship Status</option>
                <option className="bg-black">Single</option>
                <option className="bg-black">Dating</option>
                <option className="bg-black">Engaged</option>
                <option className="bg-black">Married</option>
              </select>
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
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <select
                aria-label="Story category"
                title="Story category"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-purple-500/40"
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

              <input
                type="date"
                aria-label="Story date"
                title="Story date"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-purple-500/40"
              />

              <textarea
                rows={14}
                required
                placeholder="Describe your complete experience..."
                className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <textarea
                rows={8}
                placeholder="What emotions did you feel during this experience?"
                className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />

              <textarea
                rows={8}
                placeholder="Did any signs, symbols, numbers, names, places, or messages appear?"
                className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/40"
              />
            </div>
          </div>

          {/* Dream Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Dream & Spiritual Details
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white">
                <option>Dream Frequency</option>
                <option className="bg-black">Once</option>
                <option className="bg-black">Few Times</option>
                <option className="bg-black">Monthly</option>
                <option className="bg-black">Weekly</option>
                <option className="bg-black">Very Frequently</option>
              </select>

              <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white">
                <option>Did you later meet this person?</option>
                <option className="bg-black">Yes</option>
                <option className="bg-black">No</option>
                <option className="bg-black">Not Yet</option>
              </select>

              <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white">
                <option>How strong was the connection?</option>
                <option className="bg-black">Mild</option>
                <option className="bg-black">Moderate</option>
                <option className="bg-black">Strong</option>
                <option className="bg-black">Life-Changing</option>
              </select>

              <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white">
                <option>Do you believe this was destiny?</option>
                <option className="bg-black">Yes</option>
                <option className="bg-black">Maybe</option>
                <option className="bg-black">Not Sure</option>
              </select>

            </div>
          </div>

          {/* Experience Checklist */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Experiences Connected To Your Story
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
                "11:11 Encounters",
                "Telepathic Feeling",
                "Recurring Person",
                "Karmic Connection",
                "Twin Flame Experience",
                "Unexplained Attraction",
                "Prophetic Dream",
                "Divine Timing",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-gray-300 cursor-pointer"
                >
                  <input type="checkbox" className="h-4 w-4" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Media Upload */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Supporting Material
            </h3>

            <label htmlFor="supportingMaterial" className="sr-only">
              Upload supporting material
            </label>
            <input
              id="supportingMaterial"
              type="file"
              multiple
              className="w-full rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-5 py-6 text-gray-400"
            />

            <p className="mt-3 text-sm text-gray-500">
              Upload dream journals, screenshots, artwork, letters,
              sketches, signs, or supporting evidence.
            </p>
          </div>

          {/* Author Preference */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Publishing Preference
            </h3>

            <div className="space-y-4">

              <label className="flex items-center gap-3 text-gray-300">
                <input type="radio" name="privacy" />
                Publish with my full name
              </label>

              <label className="flex items-center gap-3 text-gray-300">
                <input type="radio" name="privacy" />
                Publish with first name only
              </label>

              <label className="flex items-center gap-3 text-gray-300">
                <input type="radio" name="privacy" />
                Publish anonymously
              </label>

            </div>
          </div>

          {/* Quote Section */}
          <div className="rounded-3xl border border-white/10 bg-black/30 p-10 text-center">
            <p className="text-3xl italic text-gray-300">
              “Perhaps your story began before the meeting.”
            </p>

            <p className="mt-4 text-purple-400">
              Before Her Name Existed
            </p>
          </div>

          {/* Agreement */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <label className="flex gap-4">
              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <span className="text-gray-400">
                I confirm that this submission is based on my own
                experience. I grant permission for publication on
                Before Her Name Existed and understand that personal
                information may be edited or removed for privacy and
                clarity purposes.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="
      rounded-full
      bg-white
      px-14
      py-5
      text-lg
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-2xl
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