import { SiteConfig } from "@/constants/SiteConfig";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = SiteConfig.name;
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 128,
				background: "linear-gradient(to bottom right, #1f2937, #111827)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "32px",
				}}
			>
				<div
					style={{
						fontSize: 96,
						fontWeight: "bold",
					}}
				>
					{SiteConfig.name}
				</div>
			</div>
			<div
				style={{
					marginTop: "32px",
					fontSize: 32,
					color: "#d1d5db",
					maxWidth: "80%",
					textAlign: "center",
				}}
			>
				{SiteConfig.description}
			</div>
		</div>,
		{
			...size,
		},
	);
}
