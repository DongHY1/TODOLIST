FROM node:14-alpine as builder


WORKDIR /client
RUN npm install -g pnpm
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
ADD package.json pnpm-lock.yaml /client/
RUN pnpm install

ADD . /client


RUN pnpm run build:prod

# 选择更小体积的基础镜像
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder client/dist /usr/share/nginx/html