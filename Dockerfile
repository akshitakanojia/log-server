FROM node:lts-stretch 
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build