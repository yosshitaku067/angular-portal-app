# Dockerfile ではソースのコピーとビルド処理を実行する

##################### angular build ##################################################
### ベースステージ ###
FROM node:lts-alpine as base

# @angular/cliをグローバルインストール
RUN npm install -g @angular/cli

# ワーキングディレクトリの設定
WORKDIR /portal-app

# package.jsonをコピー
COPY ./portal-app/package*.json /portal-app/

# 一度 node_modules を削除してからnpm install
RUN rm -rf node_modules && npm install

### ビルドステージ ###
FROM base as angular-build

# 全てのソースコードをコピー
COPY ./portal-app /portal-app/

# プロダクションビルド
RUN ng build --prod --base-href=/portal-app/
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
COPY --from=angular-build /portal-app/dist/portal-app /express-app/www/portal-app
######################################################################################