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

**重要**: このプロジェクトでは、**すべてのGitHub操作にgh CLIを使用**します。MCPツール（`mcp__github__*`）は使用しないでください。

### 判断フロー

GitHub操作が必要な場合、以下の順序で判断してください:

1. ✅ このドキュメント（CLAUDE.md）の指示を確認
2. ✅ `gh` CLIで実行可能か確認
3. ❌ MCPツールは使用禁止（権限エラーのため）

### 基本操作

- **ISSUE作成**: `gh issue create`
- **ISSUE閲覧**: `gh issue view <番号>`
- **ISSUEコメント**: `gh issue comment <番号>`
- **PR作成**: `.claude/commands/pr.md` のコマンド（ブランチ名からGitHub ISSUEを自動取得）
- **PR閲覧**: `gh pr view <番号>`
- **PRコメント**: `gh pr comment <番号>`
- **リポジトリ情報**: `gh repo view`

### 優先順位ルール

```
優先度: プロジェクト指示 > gh CLI > MCPツール（使用禁止）
```

## 注意事項

- コミットメッセージは日本語で記述
- コミット前にlefthookでチェックが実行されます
- `@doc/` でドキュメントファイルを参照できます
