import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import { matter } from "vfile-matter";

export type PostMeta = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  [key: string]: unknown;
};

export async function getPostMeta(slug: string): Promise<PostMeta> {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const result = await remark()
    .use(remarkFrontmatter)
    .use(() => (_, file) => {
      matter(file);
    })
    .process(fileContents);

  // @ts-expect-error matter拡張データの型が定義されていないため
  return result.data.matter || {};
}

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const meta = await getPostMeta(slug);

        return {
          slug,
          meta,
        };
      })
  );

  // 日付でソート（新しい順）
  return allPostsData.sort((a, b) => {
    if (!a.meta.date || !b.meta.date) return 0;
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
}
