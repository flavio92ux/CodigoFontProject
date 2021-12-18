FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /back-end

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "start" ]
