import { Card, CardBody, CardHeader } from "@heroui/card";

type Props = {
	title: string;
	description?: string;
	date?: string;
	tags?: string[];
};

export default function PostCard({ title, description, date, tags }: Props) {
	return (
		<Card>
			<CardHeader className="text-xl font-semibold mb-2">
				<p>{title}</p>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				{date && <p className="text-gray-500 text-sm mb-3">{new Date(date).toLocaleDateString("ja-JP")}</p>}
				{description && <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>}
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-auto">
						{tags.slice(0, 3).map((tag) => (
							<span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
								{tag}
							</span>
						))}
						{tags.length > 3 && <span className="text-xs text-gray-500">+{tags.length - 3}</span>}
					</div>
				)}
			</CardBody>
		</Card>
	);
}
