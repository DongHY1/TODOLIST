FROM node:14-alpine as builder

WORKDIR /server
RUN npm install -g pnpm
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
ADD package.json pnpm-lock.yaml /frontend/
RUN pnpm install

ADD . /frontend

RUN pnpm run build

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY --from=builder frontend/dist /usr/share/nginx/html