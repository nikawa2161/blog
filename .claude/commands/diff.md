---
description: Git差分をブラウザで表示します
allowed-tools: Bash(*)
model: haiku
---

Git差分をブラウザでGitHub風のUIで表示します（difitを使用）。

対象リポジトリ: https://github.com/nikawa2161/blog

## 実行手順

```bash
# 作業ディレクトリの全ての変更（ステージング済み＋未ステージング）
git diff HEAD | npx difit working
```

## 使用例

**/diff** - 作業ディレクトリの全ての変更をブラウザで表示

## 機能

- GitHub風のFiles changedビューで差分を表示
- ローカルWebサーバーが自動起動しブラウザが開く
- コメント機能付き（AIへのプロンプトとしてコピー可能）
- オフラインで動作
