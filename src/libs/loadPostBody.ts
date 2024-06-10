import { loadAllPosts } from "@/libs/loadAllPosts";

export function loadPostBySlug(slug: string) {
  const allPosts = loadAllPosts();
  const post = allPosts.find(({ metadata }) => metadata.slug === slug);

  return post;
}
