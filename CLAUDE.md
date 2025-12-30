# Claude開発ガイド

このファイルはClaude Codeでの開発時に参照されるプロジェクト固有のガイドラインです。

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

## コミットメッセージ規約

@doc/commit-convention.md

コミットメッセージは以下の形式に従ってください：

```
<type>: <subject>

[本文]
```

**Type一覧:**
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント変更
- `style`: コードフォーマット
- `refactor`: リファクタリング
- `perf`: パフォーマンス改善
- `test`: テスト追加・修正
- `chore`: ビルド・ツール変更

詳細は `doc/commit-convention.md` を参照してください。

## PR作成

`.claude/commands/pr.md` のコマンドを使用してPRを作成できます。
ブランチ名から自動的にGitHub ISSUEを取得し、PRを作成します。

## 注意事項

- コミットメッセージは日本語で記述
- コミット前にlefthookでチェックが実行されます
- `@doc/` でドキュメントファイルを参照できます
