import StoryForm from "@/components/StoryForm";

export default function SubmitPage() {
  return (
    <section className="min-h-screen bg-black text-white py-32">

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-5xl mb-8">
          Share Your Story
        </h1>

        <StoryForm />

      </div>

    </section>
  );
}