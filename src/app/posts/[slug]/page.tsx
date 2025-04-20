import fs from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-indigo">
      <h1>{slug}</h1>
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src", "posts");
  const filenames = fs.readdirSync(postsDir);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;
