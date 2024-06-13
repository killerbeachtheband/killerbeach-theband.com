import { AudioController } from "@/components/audio-controller";
import { loadAllPosts } from "@/libs/loadAllPosts";
import Link from "next/link";

export function News() {
  const allPosts = loadAllPosts();

  return (
    <div>
      <h1>News</h1>
      <ul>
        {allPosts.map(({ metadata }) => (
          <li key={metadata.slug}>
            <Link href={`news/${metadata.slug}`}>{metadata.title}</Link>
            <span>description : {metadata.description}</span>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-16 left-0 w-full px-5">
        <AudioController progress={40} />
      </div>
    </div>
  );
}
