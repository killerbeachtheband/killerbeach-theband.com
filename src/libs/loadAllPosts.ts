import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function loadAllPosts() {
  const dirPath = path.join(process.cwd(), "src", "posts", "news");
  const fileNames = fs.readdirSync(dirPath);

  const mdData = fileNames.map((fileName) => {
    const fileString = fs.readFileSync(path.join(dirPath, fileName), "utf-8");
    const md = matter(fileString);

    return {
      metadata: {
        title: md.data.title as string,
        description: md.data.description as string,
        slug: md.data.slug as string,
      },
      content: md.content,
    };
  });

  return mdData;
}
