import path from "node:path";
// next.config.mjs
import createMDX from "@next/mdx";
import { remarkMermaid } from "@theguild/remark-mermaid";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["md", "mdx", "ts", "tsx"],
	turbopack: {
		resolveAlias: {
			"@/posts": path.resolve("./src/posts"),
		},
	},
};

const withMDX = await createMDX({
	options: {
		remarkPlugins: [remarkGfm, remarkFrontmatter, remarkBreaks, remarkMermaid],
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: "aurora-x",
				},
			],
			rehypeSlug,
		],
	},
});

export default withMDX(nextConfig);
