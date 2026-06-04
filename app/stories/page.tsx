import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export default function StoriesPage() {
  const featuredStories = stories.filter(
    (story) => story.featured
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
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
                tracking-[0.3em]
                text-purple-300
              "
            >
              Real Experiences
            </span>

            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                xl:text-8xl
                font-black
              "
            >
              Real
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
                Soulmate Stories
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-4xl
                text-lg
                leading-relaxed
                text-gray-400
              "
            >
              Dreams. Signs. Synchronicities. Recognition.
              Explore stories from people who felt connected
              to their future spouse before they understood why.
            </p>
          </div>

          {/* Statistics */}
          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[
              {
                number: "1,200+",
                label: "Stories Shared",
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
                label: "Possibilities",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  text-center
                  backdrop-blur-xl
                "
              >
                <h3
                  className="
                    text-4xl
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

                <p className="mt-3 text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">
              Featured Stories
            </h2>

            <p className="mt-4 text-gray-400">
              Extraordinary journeys shared by our community.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {featuredStories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                author={story.author}
                readTime={story.readTime}
                image={story.image}
                featured={story.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-12 text-center text-5xl font-bold">
            Explore By Category
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Dreams",
              "Soulmates",
              "Recognition",
              "Past Lives",
              "Marriage",
              "Signs",
              "Synchronicities",
              "Destiny",
            ].map((category) => (
              <button
                key={category}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3
                  text-gray-300
                  transition
                  hover:border-purple-500/30
                  hover:bg-white/[0.05]
                "
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">
              All Stories
            </h2>

            <p className="mt-4 text-gray-400">
              Every relationship carries a story.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                author={story.author}
                readTime={story.readTime}
                image={story.image}
                featured={story.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-12
              md:p-20
              text-center
              backdrop-blur-xl
            "
          >
            <div className="mb-8 text-6xl">
              ✨
            </div>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-light
                italic
                text-gray-200
              "
            >
              “Perhaps the heart recognizes something
              the mind has not yet learned.”
            </h2>

            <p className="mt-8 text-purple-400">
              Before Her Name Existed
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-purple-900/10
              via-pink-900/10
              to-indigo-900/10
              p-12
              md:p-20
              text-center
            "
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Have A Story To Share?
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
              Dreams, signs, soulmate recognition,
              spiritual experiences, and unexplained
              connections deserve to be preserved.
            </p>

            <button
              className="
                mt-10
                rounded-full
                bg-white
                px-10
                py-5
                text-lg
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Share Your Story ✨
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}