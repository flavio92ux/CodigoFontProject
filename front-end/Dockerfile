FROM mhart/alpine-node:16.4.2
WORKDIR /front-end
COPY package*.json /client/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
