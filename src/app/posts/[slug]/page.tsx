import fs from "fs";
import path from "path";
import Toc from "@/components/Toc";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 md:sticky md:top-0 md:h-screen md:pt-8">
          <Toc contentSelector=".article-content" />
        </aside>
        <main className="md:w-3/4">
          <article className="article-content prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-indigo">
            <h1>{slug}</h1>
            <Post />
          </article>
        </main>
      </div>
    </div>
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
