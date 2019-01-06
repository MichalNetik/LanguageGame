FROM node:10.14.2-alpine as node

RUN mkdir -p /usr/src/e2e
WORKDIR /usr/src/e2e
COPY protractor-ci.conf.js /usr/src/e2e

RUN npm install -g protractor
RUN npm install

COPY . /usr/src/e2e
