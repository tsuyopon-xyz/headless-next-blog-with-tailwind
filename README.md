## 概要

このレポジトリは、以下の人向けに作成した学習用レポジトリです。

- Next.jsを学びたい人
- React × TypeScriptを学びたい人
- Tailwind CSSを学びたい人
- 用意されたデザインを元にコーディングしたい人


「[デモページ](https://headless-next-blog-with-tailwind.vercel.app/)」をご覧いただくと分かる通り、内容はブログサイトになります。

静的ファイル生成、SPAのスキルを身につけたい方は、こちらの学習レポジトリがお役にたてば幸いです。



### ■補足1（このレポジトリのコードを使って本格的にブログを運用したい場合）

デモページ内のデータは全てダミーデータでローカルから読み込んでいます。

このレポジトリのコードを使ってブログサイトを運営したい場合は、

- Headless CMSを活用してデータを管理(microCMSなど)
- Headless CMSで管理しているデータを非同期通信などを使って取得する
- 取得したデータを利用する

といった感じで運用すると良いでしょう。


### 補足2（未実装部分の解説）

#### その1: カテゴリーページ、アーカイブページ

サイドバーに「カテゴリー」「アーカイブ」を用意していますが、「カテゴリーページ」「アーカイブページ」はあえて実装していません。

デザイン的にはトップページの記事一覧と同じような形になると思うので、ぜひトップページの実装を参考に「カテゴリーページ」「アーカイブページ」の実装にチャレンジしていただけたらと思います。



#### その2: 記事ページ、プロフィールページの目次

「目次機能」に関しては、後日実装する予定です。（いつ実装するかは未定）

もちろん、僕が実装する前に「目次機能の実装」にチャレンジしていただいても問題ありません。


---

## デモ

- [デモページを見る](https://headless-next-blog-with-tailwind.vercel.app/)
- [Figmaで作成したデザインを確認する](https://www.figma.com/file/A2qmhTPT6sDyiugiqyPuBQ/headless-next-blog-with-tailwind?node-id=9%3A271)
- [動画で内容を確認する](https://youtu.be/_hm8aMMw8io)

---

## 使用しているツール

- 開発系
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
- デザイン系
  - [Figma](https://www.figma.com/)
  - [Tailwind UI](https://tailwindui.com/)


その他、開発で使っているライブラリなどの詳細は「package.json」をご覧いただけたらと思います。

---
## このレポジトリの内容で質問をしたい方へ

以下リンク先のページで紹介している、LINE公式アカウントより質問をいただけたらと思います。

- [LINE公式アカウント](https://tsuyopon.xyz/lp/mail-magazine/)