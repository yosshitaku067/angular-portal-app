# Dockerfile ではソースのコピーとビルド処理を実行する

##################### angular build ##################################################
### ベースステージ ###
FROM node:lts-alpine as base

# @angular/cliをグローバルインストール
RUN npm install -g @angular/cli

# ワーキングディレクトリの設定
WORKDIR /angular-app

# package.jsonをコピー
COPY ./angular-app/package*.json /angular-app/

# 一度 node_modules を削除してからnpm install
RUN rm -rf node_modules && npm install

### ビルドステージ ###
FROM base as angular-build

# 全てのソースコードをコピー
COPY ./angular-app /angular-app/

# プロダクションビルド
RUN ng build --prod --base-href=/angular-app/
######################################################################################

##################### express build ##################################################
### ビルドステージ ###
FROM base as express-build

# ワーキングディレクトリの設定
WORKDIR /express-app

# package.jsonをコピー
COPY ./express-app/package*.json /express-app/

# 一度 node_modules を削除してからnpm install
RUN rm -rf node_modules && npm install

# 全てのソースコードをコピー
COPY ./express-app /express-app/

# ビルド済みangularサイトをコピー
COPY --from=angular-build /angular-app/dist/angular-app /express-app/www/angular-app
######################################################################################