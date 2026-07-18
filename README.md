# Koji Japanese Coaching Version 3.1 — Display Stable Edition

松下 剛治（Koji Matsushita）の日本語・就職面接コーチングサイトです。Version 3.0のブランドデザインを維持しながら、公開環境で起こり得るCSS・JavaScriptの不整合とレスポンシブ表示を修正しています。

## Version 3.1の重要な修正

- CSS・JavaScript・設定ファイルをVersion 3.1専用名へ変更し、旧キャッシュとの混在を防止
- Netlifyの1年間immutableキャッシュを廃止し、更新時に再検証する設定へ変更
- `localStorage`が制限されたブラウザでもJavaScript全体が停止しないよう修正
- JavaScriptが失敗しても写真・カード・本文が非表示にならない構造へ変更
- 画像の高さ自動調整を追加し、スマートフォンでプロフィール写真が縦に伸びる問題を修正
- 320px幅を含む狭いスマートフォン向けの表示を調整
- ドイツ語など長い言語名が言語選択欄で切れにくいよう改善
- GitHub Actionsの検査対象を新しいファイル名へ更新

## 公開方法

このフォルダの「中身」をGitHubリポジトリのルートへ上書きし、`main`ブランチへ反映してください。フォルダ自体を1階層追加しないよう注意してください。

新しいファイル名を使用しているため、古い`style.css`や`site.js`がブラウザに残っていてもVersion 3.1と混在しません。

## 公開後に確認するページ

- `/ja/`
- `/en/`
- `/de/`
- `/th/`
- `/sitemap.xml`
- `/robots.txt`

## 関連資料

- `DISPLAY_STABILITY_FIX.md`：表示崩れの原因と修正内容
- `QA_REPORT.md`：全体検査結果
- `DEPLOYMENT_CHECKLIST.md`：公開後の確認手順
- `VIDEO_INTEGRATION.md`：紹介動画の追加手順
- `LANGUAGE_AUDIT.md`：言語監査
