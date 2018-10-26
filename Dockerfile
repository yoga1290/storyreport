FROM node:8
EXPOSE 4200

WORKDIR /app
ADD . /app

# VOLUME /app/server/config

RUN npm i
CMD npm start
