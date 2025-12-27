# 🚀 クイックスタート - GitHub公開

## 最短5分でGitHub Pagesに公開！

### ステップ1: GitHubリポジトリ作成 (1分)

1. https://github.com にログイン
2. 右上「+」→「New repository」
3. Repository name: `construction-matching-site`
4. Public を選択
5. **「Add a README file」などのチェックは外す**
6. 「Create repository」をクリック

### ステップ2: ローカルからプッシュ (2分)

プロジェクトフォルダで以下を実行：

```bash
# 初期化
git init
git add .
git commit -m "Initial commit"

# GitHubに接続（URLは自分のものに変更）
git remote add origin https://github.com/あなたのユーザー名/construction-matching-site.git
git branch -M main
git push -u origin main
```

### ステップ3: GitHub Pages有効化 (1分)

1. GitHubリポジトリページ → **Settings**
2. 左メニュー → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / **(root)** を選択
5. **Save**

### ステップ4: 公開URL確認 (1分)

数分後、Pagesページに表示されます：
```
✅ Your site is live at https://username.github.io/construction-matching-site/
```

---

## 📂 含まれるファイル

✅ すべてのHTMLページ（5ページ）
✅ CSS・JavaScriptファイル
✅ サンプル求人データ（15件）
✅ .gitignore（不要ファイル除外）
✅ LICENSE（MITライセンス）
✅ README_GITHUB.md（詳細説明）
✅ GITHUB_SETUP.md（詳細手順）
✅ GitHub Actions設定（自動デプロイ）

---

## 🔄 更新方法

ファイルを編集後：

```bash
git add .
git commit -m "更新内容"
git push
```

数分で自動反映されます！

---

## ❓ トラブル時

### パスワードエラーが出る場合
→ **Personal Access Token** を作成
1. GitHub → Settings → Developer settings → Personal access tokens
2. "Generate new token (classic)"
3. `repo` にチェック → Generate
4. トークンをコピーしてパスワード欄に貼り付け

### 詳細は GITHUB_SETUP.md を参照

---

**準備完了！** すぐに公開できます 🎉
