prerequisite: docker and docker-compose to be install, db client such as dbeaver
extra: docker & docker-compose plugin for VS code

steps:
1. git clone this repo
2. docker-compose docker-compose.yml / right click docker-compose.yml in VS code to build postgresql
3. start db client and connect to the container db, details such as credential at database.env
4. Run sql script in sql folder
due to time contraint and limited local hard disk space, (else would dockerize all the services :( )
5. open cmd / terminal, cd into the repo folder: for each of the folders
  5.1. gateway - npm run start:dev
  5.2. customer - npm run start:dev
  5.3. product - npm run start:dev
  5.4. order - npm run start:dev
  5.5. payment - npm run start:dev
  5.6. fe - npm start

In case frontend wasn't working:
import postman collection to test backend APIs. (required postman)

Explaination:

fe: frontend
gateway: api gateway
customer: customer service
product: product service
order: order service
payment: payment service

fe <-> gateway <-> customer<->db
               <-> product<->db
               <-> order<->db
               <-> payment<->db

ToDo:
1. frontend validation
2. kafka connect for async streaming of data for each microservices
3. auth service