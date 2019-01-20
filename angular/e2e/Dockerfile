FROM node:10-slim as node

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

RUN mkdir -p /usr/src/e2e
WORKDIR /usr/src/e2e
COPY . /usr/src/e2e

RUN npm install -g protractor
RUN npm install

RUN webdriver-manager update

