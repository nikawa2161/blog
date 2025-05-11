import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function Home() {
	const posts = await getAllPosts();

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts.map(({ slug, meta }) => (
					<Link
						href={`/posts/${slug}`}
						key={slug}
						className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
					>
						<PostCard title={meta.title || slug} description={meta.description} date={meta.date} tags={meta.tags} />
					</Link>
				))}
			</div>
		</div>
	);
}
