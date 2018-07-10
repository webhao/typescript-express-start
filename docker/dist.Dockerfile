FROM harbor.gagogroup.cn/meilai/node8:0.3

COPY dist/ /usr/src/app/
WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node" , "server.js"]