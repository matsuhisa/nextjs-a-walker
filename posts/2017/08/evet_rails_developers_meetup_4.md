---
title: 「Rails Developers Meetup 4」に参加しました&nbsp;#railsdm
description: Pocke さんが話す！伊藤（jnchito）さんが話す！「Rails Developers Meetup 4」に参加してきました
date: 2017/08/24
category: event
tags: event, study, ruby
---

「[Rails Developers Meetup 4](https://rails-developers-meetup.connpass.com/event/62792/)」に参加してきました。

- 場所が、マネーフォワードで行ったことがなかった
- Pocke さんが話す！
- 伊藤（[@jnchito](https://twitter.com/jnchito/)）さんが話す！

# まとめ

- 公開コードレビューは、普段の業務でも同じような話をしているので納得感が大きい。特に二人目の人のコードレビューは、レビューで気づくいいところだったと思いました
- tachikoma！という気持ち
- マネーフォワードさん、派手じゃないけれど、手堅い感じのオフィスでいい

# メモ

## Dive into Rubygems

- Rails でも 70 ぐらいの gem に依存している
- Gem の歩き方
  - gem-src を使う
  - peco 使っている
- tempgem を使うと一時的に gem をインストールできる
- time コマンド。3秒以上かかったコマンドは時間を表示する .zshrc に書いてある

## プロを目指すRailsエンジニアのための公開コードレビュー

- シュッとした顔立ちだった（PhotoShopで加工されていない）
- https://github.com/JunichiIto/train-ticket-rails/pull/27
  - 27行目はメソッドにまとめる
- https://github.com/JunichiIto/train-ticket-rails/pull/15
  - app/models/gate.rb:19 の 0 が特別な意味がでている
  - app/models/ticket.rb:3
  - must_be_exit 英文法的に NG
- https://github.com/JunichiIto/train-ticket-rails/tree/answer

### 気になった点

- 使用済みの切符を表すコード
  - インスタンスメソッドを作って抽象化
  - わかりやす名前で
- ?がつくメソッド
  - https://github.com/JunichiIto/train-ticket-rails/pull/10/files#diff-1a01f34da84dcb589b607e99187dc18aR51
  - validate を使う
  - 真偽値を返すだけがいい
    - ActiveRecord Valid?メソッド は例外
- return っている？

- メソッドの責務
- 抽象化。意図がわかる名前がよい
- 不要なコンテキストをなくそう
- Railsの機能を使いこなそう
- 後置if の使い分け。ガードせつでやることがおおい。多用はしていない

- [「プロを目指すRailsエンジニアのための公開コードレビュー」という発表をしました #railsdm](http://blog.jnito.com/entry/2017/08/26/090024)

## Bye tachikoma gem

- tachikoma deprecated する
- 刺身ブーメランさんが元ネタ
  - RubyKaigi 2013
- 2015/12 に同じ資料を作っていた...
- MoneyFordでも同じ？
  - tachikoma という名前だけれど、tachikoma.gem じゃない...
- Saddler gem
  - Reviewdog 便利。察さなくても README.md でわかる
- [資料](https://www.slideshare.net/sanemat/byetachikomagem)

## Rubyistだった私がRailsでマネーフォワードAPIの開発に携わって

- Ruby は自然言語ににている
- ブロック
  - 従属節
- 三人称単数現在形
- Railsの前にRubyやろう
- 認証認可
  - doorkeeper openid conect を使っている

## Railsで新規サービスを開発する際にやったこと

- yadokari
- テストは必ず書く、というルール

## Webpacker is installed

- webpacker 試してみようか
