FROM harbor.gagogroup.cn/meilai/gagonode:v8.11.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src
# 分别使用taobao/gago registry安装依赖包
RUN nrm use taobao\
  && npm i -g npm\
  && npm i -g typescript@2.9 nodemon@1.17 concurrently@3 jest@22 tslint@5\
  && npm i typescript@2.9 body-parser@1.18 compression@1.7 errorhandler@1.5 express@4 express-validator@5.2 winston@2.4\
  husky supertest@3.1 ts-jest@22 http-proxy-middleware@0.18\
  @types/body-parser@1 @types/compression @types/errorhandler @types/express@4 @types/jest@22 @types/node@8\
  @types/winston@2 @types/http-proxy-middleware\
  && nrm use gago\
  && npm i @gago/tslint-config\
  && npm cache clean --force

CMD [ "node" ]