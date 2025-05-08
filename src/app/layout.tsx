import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "My Blog",
	description: "このブログは、Next.jsを使用して作成されています。",
};

const GitHubIcon = () => <Image src="/github-mark-white.svg" alt="GitHub icon" width={32} height={32} />;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
				<header className="bg-gray-800 text-white p-4">
					<div className="container mx-auto flex justify-between items-center">
						<div className="text-xl font-bold">
							<Link href="/">blog</Link>
						</div>
						<Link href="https://github.com/nikawa2161/blog" target="_blank" rel="noopener noreferrer">
							<GitHubIcon />
						</Link>
					</div>
				</header>
				<main className="container mx-auto p-4 flex-grow">{children}</main>
				<footer className="bg-gray-200 text-center p-4 mt-8">
					<p>© {new Date().getFullYear()} My Blog</p>
				</footer>
			</body>
		</html>
	);
}
