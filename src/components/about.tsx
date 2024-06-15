import { AudioController } from "@/components/audio-controller";
import { loadAllPosts } from "@/libs/loadAllPosts";
import { marked } from "marked";

export function About() {
  const [aboutPost] = loadAllPosts("about");
  const html = marked(aboutPost.content);

  return (
    <div>
      <article
        className="prose prose-neutral prose-invert mx-auto max-w-5xl pb-48 pt-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="sticky bottom-16 left-0 w-full px-5">
        <AudioController progress={40} />
      </div>
    </div>
  );
}
