FROM node:14-alpine as builder
WORKDIR /home/node
COPY package*.json .
RUN npm install
COPY . .
RUN npm start
EXPOSE 3000
CMD ["npm", "start"]
