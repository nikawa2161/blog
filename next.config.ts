import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    turbo: {
      resolveAlias: {
        "@/posts": path.resolve(__dirname, "./src/posts"),
      },
    },
  },
};

const withMDX = createMDX({
  // 必要に応じてremark・rehypeプラグインを追加
});

export default withMDX(nextConfig);
