# 問い合わせフォーム追加（Netlify Forms）

## 追加内容
- 12言語のトップページに相談フォームを追加
- 入力項目：名前、メール、国・地域、相談テーマ、希望言語、日本語レベル、相談内容
- プライバシー同意チェック
- スパム対策のhoneypotフィールド
- 各言語の送信完了ページ
- 各言語のプライバシーポリシーにフォーム取得情報の説明を追加

## GitHubへの反映
1. ZIPを解凍
2. `koji-japanese-coaching-main` 内のすべてのファイルをGitHubへ上書き
3. コミットする
4. Netlifyの自動デプロイを待つ

推奨コミットメッセージ：
`Add multilingual Netlify consultation form`

## Netlifyで必要な設定
1. 対象サイトを開く
2. `Forms` を開く
3. `Enable form detection` が表示された場合は有効化
4. 有効化後に再デプロイ
5. `Configuration` → `Notifications` → `Form submission notifications` でメール通知を追加
6. 通知先に `japancareer.support@gmail.com` を設定

## 動作確認
- `/ja/` または `/en/` のフォームから、実在するメールアドレスと自然な文章で1件送信
- Netlifyの `Forms` に `career-consultation` が表示されることを確認
- 通知メールが届くことを確認
- 届かない場合はFormsのSpam一覧も確認

※フォームには健康情報、在留カード番号、パスポート番号などの機微情報を入力させない運用にしてください。
