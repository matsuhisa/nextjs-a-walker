---
title: GitHub Pages の設定をしてみた
description: GitHub Pages の設定をしてみました。はまったことが多かったのでメモ
date: 2016/11/10
category: tech
tags: github, memo, tech
---

[GitHub Pages](https://pages.github.com/) の設定をしてみました。はまったことが多かったのでメモです。

## Middleman の利用

[Middleman](https://middlemanapp.com/jp/) を利用してHTMLを生成することにしました。
Markdown で、記事を書くことができるのが便利です。

WordPress / MovableType もいいんですが、

- デプロイもコマンドで終わらせたい
- 動的に生成する必要がない
- Ruby で（が）やりたい

という理由で、Middleman を選びました。
Middleman のインストールや利用方法については、ここでは特には書きません。

## GitHub Pages を利用する 2 つの方法

- https://matsuhisa.github.io/project_name となる方法
- https://matsuhisa.github.io/ となる方法
- 今回試したのは、2つめの方法

## Github のリポジトリ

- ユーザ名がmatsuhisa であれば、 https://matsuhisa.github.io というURLになる
- 生成する前のコードは、[matsuhisa.github.io.souces](https://github.com/matsuhisa/matsuhisa.github.io.souces) という名前のリポジトリに作る
- [matsuhisa.github.io](https://github.com/matsuhisa/matsuhisa.github.io) というリポジトリを作る。これが公開されるブランチになる

## GitHub Pages への deploy

`matsuhisa.github.io` を remote 先として追加します

```bash
git remote add public git@github.com:matsuhisa/matsuhisa.github.io.git
```

Middleman の config.rb に下記を追加します

```ruby
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'master'
  deploy.remote = 'public'
end
```


build すると、HTML ファイルが生成されます。

```
bundle exec middleman build
```

deploy します

```
bundle exec middleman server
```
