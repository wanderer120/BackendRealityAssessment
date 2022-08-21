FROM node:15
WORKDIR /usr/src/customer
COPY package*.json ./
RUN npm install
COPY . .
COPY . /usr/src/customer
EXPOSE 8888
