# blog

Next.js 15を使用した個人ブログプロジェクト。

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

## プロジェクト構造

```text
.
├── biome.json
├── bun.lock
├── CLAUDE.md
├── components.json
├── doc
│   ├── commit-convention.md
│   ├── github_tool_examples.md
│   └── tree-command.md
├── lefthook.yml
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   ├── github-mark-white.svg
│   ├── logo
│   └── resume.pdf
├── README.md
├── src
│   ├── app
│   ├── components
│   ├── constants
│   ├── lib
│   ├── mdx-components.tsx
│   ├── posts
│   └── utils
└── tsconfig.json
```

> **Note**: 構造変更時は[treeコマンドの使い方](doc/tree-command.md)を参照してこのセクションを更新してください。

## ドキュメント

開発に関する詳細なドキュメントは `doc/` ディレクトリを参照してください：

- [コミットメッセージ規約](doc/commit-convention.md)
- [treeコマンドの使い方](doc/tree-command.md)

## Claude Code

Claude Codeを使用する際は `CLAUDE.md` を参照してください。

