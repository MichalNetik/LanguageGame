FROM node:10.14.2 as node

RUN mkdir -p /usr/src/frontend-app
WORKDIR /usr/src/frontend-app
COPY package.json /usr/src/frontend-app

RUN npm install
RUN npm install -g @angular/cli@latest
COPY . /usr/src/frontend-app
RUN npm run build --prod


FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
ADD sites-enabled/ /etc/nginx/sites-enabled
COPY --from=node /usr/src/frontend-app/dist /usr/share/nginx/html
