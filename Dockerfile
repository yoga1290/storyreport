FROM node:8
EXPOSE 4200

WORKDIR /app
ADD . /app

# VOLUME /app/server/config

RUN npm i

# https://stackoverflow.com/a/46779529/1683797
CMD ./node_modules/@angular/cli/bin/ng serve --host 0.0.0.0
