# 🚀 GitHubへの公開手順

このドキュメントでは、プロジェクトをGitHubにアップロードして公開する手順を説明します。

## 📋 前提条件

- [x] GitHubアカウントを作成済み
- [ ] Gitがインストールされている
- [ ] プロジェクトファイルがローカルにある

## 🔧 Gitのインストール確認

```bash
# Gitがインストールされているか確認
git --version

# 表示例: git version 2.39.0
```

インストールされていない場合：
- **Mac**: `brew install git`
- **Windows**: [Git for Windows](https://git-scm.com/download/win)
- **Linux**: `sudo apt-get install git`

## 📝 ステップ1: GitHubリポジトリの作成

1. **GitHubにログイン**: https://github.com
2. **新規リポジトリ作成**
   - 右上の「+」→「New repository」をクリック
   - Repository name: `construction-matching-site`（任意の名前）
   - Description: `建設現場監督マッチングサイトのプロトタイプ`
   - Public / Private を選択（Publicを推奨）
   - **「Initialize this repository with:」のチェックは外す**
   - 「Create repository」をクリック

## 💻 ステップ2: ローカルでGit初期化

プロジェクトフォルダで以下のコマンドを実行：

```bash
# プロジェクトディレクトリに移動
cd /path/to/your/project

# Gitを初期化
git init

# 全ファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: 建設現場監督マッチングサイト プロトタイプ"
```

## 🔗 ステップ3: GitHubにプッシュ

```bash
# GitHubリポジトリと接続（URLは自分のものに変更）
git remote add origin https://github.com/あなたのユーザー名/construction-matching-site.git

# メインブランチ名を設定
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

**初回プッシュ時**、GitHubのユーザー名とパスワード（またはPersonal Access Token）の入力を求められます。

### Personal Access Tokenの作成（必要な場合）

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" をクリック
3. Note: `construction-site-deploy`
4. Expiration: `90 days`（任意）
5. Scopes: `repo` にチェック
6. "Generate token" をクリック
7. **トークンをコピーして保存**（再表示できません）

パスワードの代わりにこのトークンを使用します。

## 🌐 ステップ4: GitHub Pagesで公開

### 方法A: 手動設定（推奨）

1. **GitHubのリポジトリページに移動**
2. **「Settings」タブをクリック**
3. **左メニューから「Pages」を選択**
4. **Source設定**
   - Source: "Deploy from a branch"
   - Branch: "main" を選択
   - Folder: "/ (root)" を選択
   - 「Save」をクリック
5. **数分待つ**
6. **ページ上部に公開URLが表示されます**
   ```
   Your site is live at https://username.github.io/construction-matching-site/
   ```

### 方法B: GitHub Actions（自動デプロイ）

プロジェクトに `.github/workflows/deploy.yml` が含まれているため：

1. **GitHubリポジトリ → Settings → Pages**
2. **Source**: "GitHub Actions" を選択
3. **以降、mainブランチにプッシュすると自動デプロイ**

## ✅ ステップ5: 動作確認

1. **公開URLにアクセス**
   ```
   https://あなたのユーザー名.github.io/リポジトリ名/
   ```

2. **すべてのページが正常に表示されるか確認**
   - [ ] トップページ
   - [ ] 求人一覧
   - [ ] 求人詳細
   - [ ] 企業向けページ
   - [ ] 求職者向けページ

3. **機能が動作するか確認**
   - [ ] 検索・フィルタリング
   - [ ] ページ遷移
   - [ ] モバイル表示

## 🔄 今後の更新手順

ローカルでファイルを編集した後：

```bash
# 変更をステージング
git add .

# コミット（メッセージは変更内容を記載）
git commit -m "求人データを追加、デザイン改善"

# GitHubにプッシュ
git push origin main
```

数分後、GitHub Pagesに反映されます。

## 🐛 トラブルシューティング

### 問題1: git pushでエラーが出る

```bash
# エラー例: remote: Support for password authentication was removed
```

**解決策**: Personal Access Tokenを使用してください（上記参照）

### 問題2: GitHub Pagesが404エラー

**原因**: 
- ファイル名が間違っている
- ブランチが正しく設定されていない

**解決策**:
```bash
# ファイル名を確認
ls -la

# index.html が存在することを確認
# Settings → Pages でブランチ設定を確認
```

### 問題3: CSSやJSが読み込まれない

**原因**: 相対パスの問題

**解決策**: すでに相対パスで記述されているため、問題なし。
```html
<!-- 正しい記述（既に実装済み） -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
```

### 問題4: 画像が表示されない

このプロトタイプには画像ファイルがないため問題ありませんが、今後追加する場合：

```bash
# 画像ディレクトリを作成
mkdir images

# 画像を追加後
git add images/
git commit -m "画像を追加"
git push
```

## 📱 モバイルでの確認

公開後、スマートフォンでもURLにアクセスして確認しましょう：

1. **QRコードを生成**（オンラインツールを使用）
2. **スマホでQRコードをスキャン**
3. **レスポンシブデザインを確認**

## 🎉 完了！

おめでとうございます！プロジェクトがGitHubで公開されました。

### 次のステップ

- [ ] README_GITHUB.mdの内容を確認・カスタマイズ
- [ ] リポジトリの説明文（About）を設定
- [ ] トピックタグを追加（construction, job-matching, frontend など）
- [ ] スターをつけてもらう
- [ ] SNSでシェア

### 便利なコマンド

```bash
# リポジトリの状態確認
git status

# コミット履歴を確認
git log --oneline

# リモートURL確認
git remote -v

# ブランチ一覧
git branch -a
```

## 📞 サポート

問題が解決しない場合は、GitHubリポジトリのIssuesセクションで質問してください。

---

**作成日**: 2024年12月27日
**対象**: 初心者向けGitHub公開ガイド
