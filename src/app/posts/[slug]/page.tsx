export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "2025-04-18-setup" }];
}

export const dynamicParams = false;
