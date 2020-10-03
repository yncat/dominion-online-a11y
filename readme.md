# Dominion online accessibility hack

## 概要

[Dominion online](https://dominion.games/) のへんな読み上げを直したり、ログを自動で読んだりするようにDOMを改造します。

## インストール

[chromeの拡張機能画面[(chrome://extensions) からdeveloper modeを有効にして、「パッケージ化されていない拡張機能」から、このリポジトリのsrcディレクトリを追加してインストールしてください。

## 使い方

正しくインストールされていれば、dominion onlineでの対戦時に、「ボタン　ボタン」と言わなくなったり、ログを勝手に読んでくれたりします。ずっと使っていると重くなることがありそうなんですが、まだよく分かってません。


## 開発

chrome://extensions で、開発者モードをオンにします。

「パッケージ化されていない拡張機能」のセクションで、 src フォルダを読み込ませます。

src以下のスクリプトを編集したら、「再読込」ボタンを押して Chrome に繁栄させます。
