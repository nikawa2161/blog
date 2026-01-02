import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About - 荷川取 一隆",
	description: "Webエンジニア 荷川取 一隆の職務経歴とスキル",
};

export default function About() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<h1 className="text-4xl font-bold mb-8">About</h1>

			{/* PDF 閲覧 */}
			<div className="mb-8">
				<Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
					職務経歴書を閲覧（PDF）
				</Link>
			</div>

			{/* 基本情報 */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">基本情報</h2>
				<div className="space-y-2">
					<p>
						<strong>名前：</strong>荷川取 一隆
					</p>
					<p>
						<strong>GitHub：</strong>
						<Link
							href="https://github.com/nikawa2161"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							nikawa2161
						</Link>
					</p>
					<p>
						<strong>Speaker Deck：</strong>
						<Link
							href="https://speakerdeck.com/nikawa2161"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							nikawa2161
						</Link>
					</p>
					<p>
						<strong>ブログ：</strong>
						<Link href="/" className="text-blue-600 hover:underline">
							https://nikawa2161.com
						</Link>
					</p>
				</div>
			</section>

			{/* 職務要約 */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">職務要約</h2>
				<p className="leading-relaxed">
					2023年よりWebエンジニアとして、バックエンドを中心にプロダクト開発に従事。直近では採用プラットフォームにおける求人機能の新規リリースに向け、求人・労働時間制度のドメイン分析〜DB設計、法令・他媒体調査、意思決定の可視化（Notion/FigJam）を推進。エラーハンドリング統一基盤やPR分割とレビュー設計（Devin活用）など、チームの開発体験改善にも継続的に取り組んでいます。
				</p>
			</section>

			{/* 保有スキル */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">保有スキル</h2>
				<ul className="list-disc list-inside space-y-2">
					<li>バックエンド開発：データベース設計、ドメイン分析、API設計</li>
					<li>フロントエンド開発：Next.js、TypeScript、レスポンシブ対応</li>
					<li>チーム開発：エラーハンドリング統一、PR分割、レビュー設計</li>
					<li>意思決定支援：法令調査、ドキュメント化、可視化（Notion/FigJam）</li>
					<li>開発体験改善：共通基盤構築、AI活用（Claude Code/Devin）</li>
				</ul>
			</section>

			{/* 技術スタック */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">技術スタック</h2>
				<div className="space-y-4">
					<div>
						<h3 className="font-bold text-lg mb-2">言語・フレームワーク</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>JavaScript（3年）、TypeScript（1年9ヶ月）</li>
							<li>PHP（2年2ヶ月）</li>
							<li>Next.js（1年9ヶ月）、Hono（9ヶ月）、NestJS（1年）</li>
							<li>Laravel（1年8ヶ月）</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">データベース</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>PostgreSQL（9ヶ月）、MySQL（1年10ヶ月）</li>
							<li>Supabase、Drizzle、TypeORM</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">その他</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>WordPress、HTML/CSS</li>
							<li>AI活用：Claude Code、Devin</li>
						</ul>
					</div>
				</div>
			</section>

			{/* 職務経歴概要 */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">職務経歴概要</h2>
				<div className="space-y-4">
					<div className="border-l-4 border-blue-600 pl-4">
						<h3 className="font-bold text-lg">株式会社EISHIN（2023年01月〜現在）</h3>
						<p className="text-gray-600">Webエンジニア（正社員）</p>
						<ul className="list-disc list-inside mt-2 space-y-1">
							<li>プロダクト開発：採用プラットフォーム（2025年04月〜現職）</li>
							<li>SES：ヘルスケアサービス（2023年06月〜2025年03月）</li>
							<li>Web制作業務（2023年01月〜2023年05月）</li>
						</ul>
					</div>
					<div className="border-l-4 border-gray-400 pl-4">
						<h3 className="font-bold text-lg">株式会社Brave（2021年08月〜2022年12月）</h3>
						<p className="text-gray-600">Webエンジニア（正社員）</p>
						<ul className="list-disc list-inside mt-2 space-y-1">
							<li>Web制作業務（2022年04月〜2022年12月）</li>
							<li>営業（2021年08月〜2022年03月）</li>
						</ul>
					</div>
					<div className="border-l-4 border-gray-400 pl-4">
						<h3 className="font-bold text-lg">医療法人社団 三喜会 鶴巻温泉病院（2019年04月〜2021年03月）</h3>
						<p className="text-gray-600">理学療法士（正社員）</p>
						<ul className="list-disc list-inside mt-2 space-y-1">
							<li>リハビリ業務</li>
						</ul>
					</div>
				</div>
			</section>

			{/* 主要な実績 */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">主要な実績</h2>
				<div className="space-y-6">
					<div className="bg-gray-50 p-6 rounded-lg">
						<h3 className="font-bold text-lg mb-2">エラーハンドリング統一による開発体験向上</h3>
						<p className="text-gray-700 mb-2">
							アプリごとに異なるエラー処理を統一し、チームの開発体験を向上。tRPC/Honoなど複数技術を検証し、実用性を優先して共通基盤化。
						</p>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>影響範囲を考慮してPRを目的別に分割（GET/POST系、data-access層、BFF層など）</li>
							<li>Devin活用で軽微な実装を効率化し、設計とレビューに時間を集中</li>
							<li>全PRがスプリント内にマージされ、スプリントゴールを達成</li>
						</ul>
						<p className="text-sm mt-2">
							<Link
								href="https://speakerdeck.com/nikawa2161/error-marp"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								詳細スライド（Speaker Deck）
							</Link>
						</p>
					</div>

					<div className="bg-gray-50 p-6 rounded-lg">
						<h3 className="font-bold text-lg mb-2">労働時間制度DB設計の意思決定支援</h3>
						<p className="text-gray-700 mb-2">
							休憩時間の表記方法を巡る議論の長期化に対し、法的要件の整理とハドル設定で設計停滞を解消し、遅延リスクを低減。
						</p>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>制度ごとの法的要件差分を調査しドキュメント化</li>
							<li>POやメンバーを巻き込み、法的要件とDB設計の両面で検討</li>
							<li>不明点は社労士へ確認し、専門家知見を適切なタイミングで取り込む</li>
						</ul>
					</div>

					<div className="bg-gray-50 p-6 rounded-lg">
						<h3 className="font-bold text-lg mb-2">求人プロパティの整理と構造化（情報設計）</h3>
						<p className="text-gray-700 mb-2">
							媒体ごとに項目名/粒度/意味が揺れる状態から、FigJamで差分を可視化し「仕事内容／労働条件／募集条件」に整理。
						</p>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>判断軸を「求職者に必要か」に固定し、「価値」で仕分け</li>
							<li>求職者の理解順序に沿ってグルーピングし、カテゴリ構造へ落とし込み</li>
						</ul>
					</div>

					<div className="bg-gray-50 p-6 rounded-lg">
						<h3 className="font-bold text-lg mb-2">DB設計の包括的レビューで品質向上と知識共有</h3>
						<p className="text-gray-700 mb-2">
							専門用語を避け誰でも参加できる場を設計し、普段DBに触れないメンバーも積極的に議論に参加。
						</p>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>参加しやすい場を設計し、学習文化を醸成</li>
							<li>チーム全体のDB理解度が向上</li>
						</ul>
					</div>
				</div>
			</section>

			{/* 自己PR */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">自己PR</h2>
				<div className="space-y-4">
					<div>
						<h3 className="font-bold text-lg mb-2">1. ユーザーファーストな設計判断と本質的な課題解決</h3>
						<p className="text-gray-700">
							データとしての本質的な意味やユーザーにとって本当に必要な情報を常に問い続け、UI都合に引きずられない設計を実現。表面的な要件対応ではなく、本質的な価値を見極める姿勢を貫いています。
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">2. 意思決定の質を高める言語化と透明性の向上</h3>
						<p className="text-gray-700">
							議論が停滞した際には、問題の背景・選択肢・判断軸・理由を整理し、判断プロセスを言語化して共有。自分の思考を隠さず、オープンにすることで、チーム全体の意思決定の質を高めています。
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">3. チーム全体の生産性向上と開発体験改善</h3>
						<p className="text-gray-700">
							個人の効率よりもチーム全体の流れを優先。影響範囲の大きい共通基盤を率先して担うことで、他メンバーがユーザー価値に直結する開発に注力できる環境を整えています。
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">4. 技術的課題解決とメンバーの成長支援</h3>
						<p className="text-gray-700">
							完璧さよりも実用性を優先し、チーム全体が前進できる解決策を選択。答えを教えるのではなく、一緒に考えることで自律的な成長を促進し、属人化を防ぐ文化を醸成しています。
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">5. 不確実性の管理と変化への適応力</h3>
						<p className="text-gray-700">
							不確実な状況でも、可視化と構造化により前進。変化を歓迎し、柔軟に方針を見直す姿勢を持っています。
						</p>
					</div>
				</div>
			</section>

			{/* 今後のキャリアビジョン */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-300">今後のキャリアビジョン</h2>
				<p className="leading-relaxed">
					Tech
					Leadとして、サービス開発を主導できる人材を目指しています。技術的な専門性を深めつつ、事業に必要な知見を積極的に学び、チームを牽引してサービスを成功へと導く力を身につけていきたいと考えています。
				</p>
				<p className="leading-relaxed mt-4">
					関係者と円滑にコミュニケーションを取り、チームの力を最大限に引き出して目標達成に貢献できる人材として、リーダーシップを発揮し、プロジェクトを成功に導きたいと考えています。
				</p>
				<p className="leading-relaxed mt-4">
					技術だけでなくビジネスの視点も持ち合わせ、プロダクトの成功に貢献できる人材として、ユーザーファーストな視点を持ちつつ、事業の成長に貢献できる技術的判断を下せる力を磨いていきます。
				</p>
			</section>
		</div>
	);
}
