FROM node:14-alpine AS build

WORKDIR /api
COPY package*.json .
RUN npm install
COPY . .
RUN npm start