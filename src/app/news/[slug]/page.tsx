import { loadAllPosts } from "@/libs/loadAllPosts";
import { loadPostBySlug } from "@/libs/loadPostBody";
import { marked } from "marked";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function News({ params }: Props) {
  const post = loadPostBySlug(params.slug);
  if (!post) return notFound();

  const html = marked(post.content);

  return (
    <main
      className="prose prose-neutral prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const post = loadPostBySlug(params.slug);
  if (!post) return notFound();

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export function generateStaticParams() {
  const allMd = loadAllPosts();
  return allMd.map(({ metadata }) => ({ slug: metadata.slug }));
}
