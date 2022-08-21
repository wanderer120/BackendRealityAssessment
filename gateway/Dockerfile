FROM node:15
WORKDIR /usr/src/gateway
COPY package*.json ./
RUN npm install
COPY . .
COPY . /usr/src/gateway
EXPOSE 3001
