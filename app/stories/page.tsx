import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export default function StoriesPage() {
  return (
    <section className="min-h-screen bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl text-white mb-12">
          Real Stories
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.title}
              title={story.title}
              excerpt={story.excerpt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}