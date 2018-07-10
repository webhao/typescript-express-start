FROM harbor.gagogroup.cn/meilai/node8:0.3
WORKDIR /usr/src/app

CMD [ "npm" , "run", "debug"]