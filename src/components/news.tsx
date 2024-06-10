import { loadAllPosts } from "@/libs/loadAllPosts";
import Link from "next/link";

export function News() {
  const allPosts = loadAllPosts();

  return (
    <div>
      <ul>
        {allPosts.map(({ metadata }) => (
          <li key={metadata.slug}>
            <Link href={`news/${metadata.slug}`}>{metadata.title}</Link>
            <span>description : {metadata.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
