import { loadAllPosts } from "@/libs/loadAllPosts";

export function loadPostBySlug(directory: string, slug: string) {
  const allPosts = loadAllPosts(directory);
  const post = allPosts.find(({ metadata }) => metadata.slug === slug);

  return post;
}
