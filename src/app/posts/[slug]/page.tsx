import fs from "fs";
import path from "path";
import Toc from "@/components/Toc";
import { getPostMeta } from "@/lib/mdx";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);
  const meta = await getPostMeta(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <main className="md:w-3/4">
          <article className="article-content prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-indigo">
            <h1>{meta.title || slug}</h1>
            {meta.date && (
              <p className="text-gray-500 mb-4">
                投稿日: {new Date(meta.date).toLocaleDateString("ja-JP")}
              </p>
            )}
            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {meta.description && (
              <p className="text-gray-700 italic mb-6">{meta.description}</p>
            )}
            <Post />
          </article>
        </main>
        <aside className="md:w-1/4 md:sticky md:top-0 md:h-screen md:pt-8">
          <Toc contentSelector=".article-content" />
        </aside>
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
