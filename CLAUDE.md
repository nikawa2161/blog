## プロジェクト概要

Next.js 15を使用した個人ブログプロジェクト。MDXでコンテンツを管理し、シンタックスハイライトやMermaidダイアグラムに対応しています。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **パッケージマネージャー**: Bun
- **コンテンツ**: MDX
- **スタイリング**: Tailwind CSS 4
- **リンター**: Biome
- **Gitフック**: lefthook

## 開発環境

```bash
# 開発サーバー起動（ポート3100）
bun dev

# ビルド
bun run build

# リンティング
bun run lint
```

## ドキュメント参照

- コミットメッセージ規約: @doc/commit-convention.md
- treeコマンドとREADME.md更新: @doc/tree-command.md（構造変更時にtreeコマンドを実行してREADME.mdを更新）

## GitHub操作

- **ISSUE作成**: `gh issue create` コマンドを使用
- **PR作成**: `.claude/commands/pr.md` のコマンドを使用
  - ブランチ名から自動的にGitHub ISSUEを取得し、PRを作成します

## 注意事項

- コミットメッセージは日本語で記述
- コミット前にlefthookでチェックが実行されます
- `@doc/` でドキュメントファイルを参照できます
