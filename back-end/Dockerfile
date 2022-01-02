FROM node:16-alpine

WORKDIR /back-end
COPY package.json .
RUN npm install
COPY . .
CMD npm start
