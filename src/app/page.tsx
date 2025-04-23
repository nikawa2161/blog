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
						<h2 className="text-xl font-semibold mb-2">{meta.title || slug}</h2>
						{meta.date && (
							<p className="text-gray-500 text-sm mb-3">{new Date(meta.date).toLocaleDateString("ja-JP")}</p>
						)}
						{meta.description && <p className="text-gray-700 mb-4 line-clamp-2">{meta.description}</p>}
						{meta.tags && meta.tags.length > 0 && (
							<div className="flex flex-wrap gap-1 mt-auto">
								{meta.tags.slice(0, 3).map((tag) => (
									<span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
										{tag}
									</span>
								))}
								{meta.tags.length > 3 && <span className="text-xs text-gray-500">+{meta.tags.length - 3}</span>}
							</div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}
