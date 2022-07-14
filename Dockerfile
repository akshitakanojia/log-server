FROM node:10.23-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["node", "app.js"]