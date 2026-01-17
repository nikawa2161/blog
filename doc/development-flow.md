# 開発フロー

## 基本フロー

```
ISSUE作成 → ブランチ作成 → 実装 → 整形 → コミット → PR作成 → レビュー → マージ
```

## 1. ISSUE作成

新しい機能追加やバグ修正の前に、GitHub ISSUEを作成します。

```bash
gh issue create --title "タイトル" --body "詳細な説明"
```

## 2. ブランチ作成

**重要**: 必ず`main`ブランチから新しいfeatureブランチを作成してください。

```bash
# mainブランチに移動
git checkout main

# 最新の状態を取得
git pull origin main

# 新しいfeatureブランチを作成（ISSUE番号を使用）
git checkout -b feature/<ISSUE番号>
```

### 例

```bash
git checkout main
git pull origin main
git checkout -b feature/81
```

## 3. 実装

コードの実装を行います。

- TypeScriptの型安全性を重視
- Next.js 15のApp Routerパターンに従う
- Biomeのルールに準拠したコードを書く

## 4. コード整形

**重要**: コミット前に必ずcode-formatterエージェントを使用してBiomeで整形してください。

Claudeが自動的に提案しますが、手動で実行する場合:

```bash
bun run lint
```

## 5. コミット

コミットメッセージは日本語で記述し、規約に従います（@doc/commit-convention.md参照）。

```bash
# ステージング
git add <ファイル>

# コミット
git commit -m "type: 件名

本文（必要に応じて）"
```

lefthookによる自動チェックが実行されます。

## 6. プッシュとPR作成

```bash
# リモートにプッシュ
git push -u origin feature/<ISSUE番号>

# PRを作成（.claude/commands/pr.mdのコマンド使用）
# ブランチ名からGitHub ISSUEを自動取得してPRを作成
```

## 7. レビューとマージ

- PRレビューを受ける
- 必要に応じて修正
- approveされたらマージ

## 8. マージ後

```bash
# mainブランチに戻る
git checkout main

# 最新の状態を取得
git pull origin main

# 不要なローカルブランチを削除
git branch -d feature/<ISSUE番号>
```

## ブランチ戦略の重要なポイント

### ✅ 正しいフロー

```bash
main → feature/81 → PR → main
```

### ❌ 避けるべきフロー

```bash
feature/75 → feature/81  # 別のfeatureブランチから作成しない
```

## 注意事項

- **常にmainブランチから新しいfeatureブランチを作成**
- 複数のISSUEを1つのブランチで対応しない
- featureブランチ間で依存関係を作らない
- コミット前に必ず整形を実行
- PRは小さく保ち、レビューしやすくする

## トラブルシューティング

### 間違ったブランチから作成してしまった場合

```bash
# 現在のブランチを削除（リモートにプッシュ済みの場合）
git checkout main
git branch -D feature/<ISSUE番号>
git push origin --delete feature/<ISSUE番号>

# mainから作り直す
git checkout main
git pull origin main
git checkout -b feature/<ISSUE番号>

# 変更を再適用
```

### コミットを間違えた場合

```bash
# 最新のコミットを取り消し（変更は保持）
git reset --soft HEAD~1

# 修正後に再コミット
git add <ファイル>
git commit -m "正しいコミットメッセージ"
```
