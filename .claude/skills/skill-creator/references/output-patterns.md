# 出力パターン

スキルが一貫性のある高品質な出力を生成する必要がある場合、これらのパターンを使用します。

## テンプレートパターン

出力形式のテンプレートを提供します。必要に応じて厳格さのレベルを調整してください。

**厳格な要件の場合（APIレスポンスやデータフォーマットなど）:**

```markdown
## Report structure

ALWAYS use this exact template structure:

# [Analysis Title]

## Executive summary
[One-paragraph overview of key findings]

## Key findings
- Finding 1 with supporting data
- Finding 2 with supporting data
- Finding 3 with supporting data

## Recommendations
1. Specific actionable recommendation
2. Specific actionable recommendation
```

**柔軟なガイダンスの場合（適応が有用な場合）:**

```markdown
## Report structure

Here is a sensible default format, but use your best judgment:

# [Analysis Title]

## Executive summary
[Overview]

## Key findings
[Adapt sections based on what you discover]

## Recommendations
[Tailor to the specific context]

Adjust sections as needed for the specific analysis type.
```

## 例示パターン

出力品質が例を見ることに依存するスキルの場合、入力/出力のペアを提供します:

```markdown
## Commit message format

Generate commit messages following these examples:

**Example 1:**
Input: Added user authentication with JWT tokens
Output:
```
feat(auth): implement JWT-based authentication

Add login endpoint and token validation middleware
```

**Example 2:**
Input: Fixed bug where dates displayed incorrectly in reports
Output:
```
fix(reports): correct date formatting in timezone conversion

Use UTC timestamps consistently across report generation
```

Follow this style: type(scope): brief description, then detailed explanation.
```

例はClaudeが望ましいスタイルと詳細レベルを、説明だけよりも明確に理解するのに役立ちます。
