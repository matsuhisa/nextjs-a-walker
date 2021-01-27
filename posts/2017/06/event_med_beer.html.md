---
title: 「MedBeer -Rails 5.1での開発について-」に参加しました&nbsp;#medbeer
description: 「MedBeer -Rails 5.1での開発について-」に参加しました。Rails のバージョンアップについて気になっていたのと、MedPeer について気になっていたので参加してきました。
image: '/images/2017/6/med_beer.jpg'
date: 2017/06/28
category: event
tags: event, study, ruby
---

「MedBeer -Rails 5.1での開発について-」に参加しました。
Rails のバージョンアップについて気になっていたのと、MedPeer について気になっていたので参加してきました。

# MedPeer について

- MedPeer は Rails に移行中
- 開発合宿やってる
- ランチLT会やってる
- 週一でレビューふりかえりしている
- 週一で輪読会やってる

## メモ

- ランチLT会いいな。

# Rails5.1時代のアプリケーション開発

- 奥さんの誕生日による飯テロ
- どの gem を使ったらいいの？
  - http://awesome-ruby.com/
- 定番のgemのメンテスピードが落ちている気がする
  - forkすればよい？
- 知見のある人のノウハウを共有する
  - 社内
  - コミュニティ
  - 技術顧問
  - 英語圏の方が情報が多い
      - http://rails-refactoring.com/
      - http://exceptionalruby.com/
      - https://rails-weekly.ongoodbits.com/
- [資料](https://speakerdeck.com/willnet/rails5-dot-1shi-dai-falseapurikesiyonkai-fa)

## メモ

- もしかして、Rails 2 の頃のソースを紹介するために 1.8 を入れていたのかな？
-

# Why? Rails 5.1

- [Web + DB の Rails 5.1](http://gihyo.jp/magazine/wdpress/archive/2017/vol99) の人
- [資料](https://speakerdeck.com/kyuden/why-rails-5-dot-1)

## form_with

- url: と model:
- Why? ： https://github.com/rails/rails/issues/25197
  - すべてのrailsアプリがturbolinksを使っている前提...

## encrypted secret

- Why? Why？
  - アプリケーションコードと秘匿情報を一緒にバージョン管理をしたい
  - https://github.com/rails/rails/issues/25095

## Keep Motivation

- issueやコメントでの議論読んでみると面白い
- モチベーションを保てる

## FAQ

- webpacker は？
  - webpacker の仕様変更を追うのが大変だった

## メモ

- issue みるのいいかも
  - [毎朝、rails commit logについて書いている人がいる](http://y-yagi.hatenablog.com/)
- turbolinks 使う前提...

# MedPeerでスムーズにRails5.1へアップグレードするためにやったこと

## アップグレード前

- 主要な機能には Rspecがあった
- しばらく bundle update していないのがあった
  - このgemなんだろう？
  - https://github.com/thoughtbot/administrate
- Rails 5.1 とのアップグレードとの差分を少なくしておく
  - 5.1 でしか動かない変更のみにしておく

## 5.1 の変更点と対応方法を知る

- A Guide for Upgrading Rails に目を通す
- DEPRECATION のコードを修正
- プライマリーキーをBIGINTにしない

## FAQ

- Bigint にしなかった理由は？
  - 開発環境でmigrateすることが度々ある

- 一番時間かかったのは？
  - secrets.yml でエラーがでた...

# モデル設計を適当にやるとどうなるか！？

- 4.2.8 だった
- データ構造を保ち続けることは難しい
- 全部作り直す = 新バージョン = 辛い
- コードは直せる
  - DB は辛い
- 少しづつやっていく
  - スキーマ変更
  - スキーマ変更ツールを用意しておくいいかも

## FAQ

- update を実行してテーブルロックとか、組織力で防げないのか？
  - onetime というディレクトリを作って知見を貯めていった
