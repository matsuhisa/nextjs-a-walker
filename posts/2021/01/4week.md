---
title: 2021年第4週目
description: 2021年第4週目ぐらいの話。
date: 2021/01/24
category: diary
tags: diary
---

## 2021 年 01 月 18 日

- 仕事
- 昨夜トイレが壊れて、今日の午前中から修理が始まり、一体型なので全取り替えという話になり、夕方には取り替え終了。
  - 2021 年最大の買い物となったので、2021 年の住居への投資は終了、という気持ち。

## 2021 年 01 月 19 日

- 仕事
  - React。コンポーネントに切り出しているけれど、粒度でフォルダを分けるのがいいのか？それとも機能別がいいのか？（今回は、Atomic Design っぽい分け方をしている）
  - 画面描画をするのが部分的にしたり、全体にする箇所はどこ？？
  - React 高速化の話はいろいろ出ているんだろうな…という推測。速さは力
    - https://senior-next.com/my-history/98fellow/part18/
- [x] ラジオ体操

## 2021 年 01 月 20 日

- 仕事
  - React で、背景画像の指定は初めて
  - インラインスタイルでだいぶ書いたけれど、非推奨なんですよね..。まだまだこなれた感じで書けないので場数がほしいところ
    - https://reactjs.org/docs/dom-elements.html#style
  - テスト項目のスプレッドシート…夜にくるのはともかく見てはいけなかった
- [x] ラジオ体操

## 2021 年 01 月 21 日

- 仕事
  - 宣言型プログラミング
  - PostgreSQL で、キャメルケースを使うとダメっぽい。知らなかった 💦
    - table.”FooBar” と書くと良さそう
- 左足がまた痛みだして、湿布をして仕事。正座みたいな座り方をして仕事をしたからかもしれない。
  - 病院明日、荻窪病院に電話して予約ができるか確認してみる

## 2021 年 01 月 22 日

- 仕事
  - 宣言型プログラミングと、宣言的 UI と、共通点がぼんやりしてる
  - React で、0 から何かを作るのが一番の経験になるけれど、サンプルアプリケーション例が欲しくなり、Rails チュートリアル的なのが欲しくなる、というループ
  - お昼休み？にシャンプー買って（切れてた）、お昼コンビニで買って…というので月曜日以来の外出をして歩けることの確認。
- 左足のことを考えて、専門病院を予約

## 2021 年 01 月 23 日

![](/images/2021/01/2021-01-23.jpg '一仕事終えているように見えて寝ている猫')

- お義姉さん夫婦と久しぶりにあった。
- スキルについて。3 つのスキルについて改めて見直し。ヒューマンスキル の話が今は多い
  - ヒューマンスキル / 対人関係
  - テクニカルスキル / エンジニアリングとか
  - ビジネススキル / 業務知識

### Fast HTML Parser を使って HTML を書き換え

- img 要素の title 属性を使ってキャプションを作るのに取り組み始める
  - Node.js を使っていることを忘れてて、パースの方法を調べてしまう
  - https://www.npmjs.com/package/node-html-parser を利用して実装。
  - a 要素も、外部リンクは target 属性をつけるようにした

```typescript
const root = HTMLParser.parse(contentHtml)
// 画像のキャプション
const images = root.querySelectorAll('img')
images.forEach((element: any) => {
  const title: string = element.getAttribute('title')
  if (title) {
    element.insertAdjacentHTML(
      'afterend',
      `<figure>${element.toString()}<figcaption class="figure-caption">${title}</figcaption></figure>`
    )
    element.remove()
  }
})
```

## 2021 年 01 月 24 日

- React で、ページネーションを作ろうと思ったら、WAI-ARIA のことも考えて実装してみようと思って実装をすることにした
  - https://ja.reactjs.org/docs/accessibility.html
  - https://www.a11ymatters.com/pattern/pagination/
- 12 時過ぎまで寝て、2 時間昼寝して…寝過ぎ
- 佐久間さんのオンラインイベントをようやく見た！
  - 自分がしていることが、どんな結果につながっているのか？を意識できるタイミングがくるのは幸せなことだと思う
