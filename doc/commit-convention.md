# コミットメッセージ規約

## 基本形式

```
<type>: <subject>

[本文]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

## Type（プレフィックス）

- `feat`: 新機能の追加
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの意味に影響しない変更（空白、フォーマットなど）
- `refactor`: バグ修正や機能追加ではないコードの変更
- `perf`: パフォーマンス改善
- `test`: テストの追加・修正
- `chore`: ビルドプロセスやツールの変更

## Subject（件名）

- 日本語で簡潔に記述
- 動詞で始める（例: 追加、修正、削除、変更）
- 50文字以内を目安

## 本文

- 変更の理由や背景を説明
- 箇条書きで具体的な変更内容を記載
- `Closes #<issue番号>` でISSUEをクローズ

## 例

```
feat: GitHub ISSUE対応のPRコマンドを追加

- ブランチ名からGitHub ISSUEを取得してPRを作成
- Jira/MCP依存を削除し、gh CLIのみで完結
- nikawa2161/blogリポジトリに対応

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

```
fix: ログイン時のエラーハンドリングを修正

認証エラー時に適切なエラーメッセージが表示されない問題を修正

Closes #123
```
