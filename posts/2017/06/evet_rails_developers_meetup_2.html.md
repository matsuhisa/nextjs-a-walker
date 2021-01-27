---
title: 「Rails Developers Meetup 2」に参加しました&nbsp;#railsdm
description: クラシルの人の話って珍しい？と思って「Rails Developers Meetup 2」に参加してきました
image: '/images/2017/6/evet_rails_developers_meetup_2.jpg'
date: 2017/06/22
category: event
tags: event, study, ruby
---

クラシルの人の話って珍しい？と思って「Rails Developers Meetup 2」に参加してきました。
あと「ふつうのRailsアプリケーション開発」が気になって。

## クラシルの webサイトをちょっとした改善で100倍速にした話

- スマートフォンのWebの表示速度の改善
- Speed Insight を見ながら対応した
- [テックブログを持っている](http://tech.dely.jp/entry/2017/06/21/191832)

### 質問

- railsエンジニアは何人？
  - 1人

### 資料

- [公開資料](https://speakerdeck.com/okutaku0507)

## ふつうのRailsアプリケーション開発

- bin/setup, bin/update

### Simple と Easy

- Simple：設計に筋が通っていて
- Easy：その人にとって
- 認識を合わせて共通認識のもとでEasyであることを目指すのが Rails
- Easy は simple の上に成り立っている
- Easyを維持しているのが良いRailsアプリケーション

### 共通認識を作る

- 大量のインプット
- bundel update 当番
- 野良コードレビュー
- Controller Model、View SearchForm
- OSS の文脈に乗る

### Easy

- 手順書を見かけたら自動化する
- 時間がかからないようにする
- 「この書き方は一般的かどうか？」
- 有効時間内で最大限の準備をしたい
- テストがないPRはマージしない
- 改善が回る。生産的になれたか？

### 資料

- [公開資料](https://www.slideshare.net/takafumionaka/rails-77195340)

### 質疑応答

- gem を入れる基準
  - 自分でメンテナンスできる？を考える
- 社内での共通認識を合わせる
  - 登壇資料を社内にシェアする
- 若手のエンジニアは？
  - 初めはペアプロ。レビューだと何往復も必要になってしまうので
- 普通の書き方を学ぶのは？
  - 外のgemを見て、書き方を学ぶ。知っている人がスターをつけているか？
- DSLの導入は？
  - DSLで得られるメリットが大きければいれる
  - 普段のイライラが先立つのであればいれる
- 外にある共通認識のズレ
  - 自分たちが選んであれば、負けない心で戦う
  - rspec であれば インスタンス変数を使う理由
  - コンテキスト間の違いだけ let にしている
- エンジニア以外の人も大切だと思うのですがなにをしているのか？
  - ふりかりを全員で
  - 30 〜 50人ぐらいで
  - 何が問題なのか？を共有するのを大切にしている
- let での 変数名がバラバラになりませんか？
  - 名前はレビューで一番叩くところなので...
  - 盛り上がったら最終的に多数決
- DBの構成を決めるのは誰？
  - 誰かが草案をもってくる
  - マイグレーションでレビューをする

## 【PR】転職ドラフト様（ドリンクスポンサー）

[![](/images/2017/6/evet_rails_developers_meetup_2.jpg)](https://job-draft.jp/)

## 技術的負債とリファクタリング

- null:false は基本
- unique制約は基本
- Refinements
- リファクタリングはいつやるの？
  - アジャイルサムライ：253ページ
