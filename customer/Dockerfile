FROM node:15
WORKDIR /usr/src/customer
COPY package*.json ./
RUN npm install
RUN npm install axios --save
RUN npm install pg --save
RUN npm install sequelize --save
RUN npm install -g sequelize-cli
COPY . .
COPY . /usr/src/customer
EXPOSE 3000
CMD [ "npm", "start" ]
