import { SiteConfig } from "@/constants/SiteConfig";
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
	metadataBase: new URL(SiteConfig.siteUrl),
	title: SiteConfig.name,
	description: SiteConfig.description,
	openGraph: {
		title: SiteConfig.name,
		description: SiteConfig.description,
		url: SiteConfig.siteUrl,
		siteName: SiteConfig.name,
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: SiteConfig.name,
		description: SiteConfig.description,
	},
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
						<Link href="/" className="flex items-center gap-2 text-xl font-bold">
							<Image src="/logo/logo.png" alt="Logo" width={32} height={32} />
							{SiteConfig.name}
						</Link>
						<Link href={SiteConfig.url} target="_blank" rel="noopener noreferrer">
							<GitHubIcon />
						</Link>
					</div>
				</header>
				<main className="container mx-auto p-4 flex-grow">{children}</main>
				<footer className="bg-gray-200 text-center p-4 mt-8">
					<p>
						© {new Date().getFullYear()} {SiteConfig.name}
					</p>
				</footer>
			</body>
		</html>
	);
}
