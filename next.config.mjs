// next.config.mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    turbo: {
      resolveAlias: {
        "@/posts": path.resolve("./src/posts"),
      },
    },
  },
};

const withMDX = await createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
