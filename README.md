prerequisite: docker and docker-compose to be install, db client such as dbeaver
<br/>
extra: docker & docker-compose plugin for VS code
<br/>
steps:<br/>
1. git clone this repo<br/>
2. docker-compose docker-compose.yml / right click docker-compose.yml in VS code to build postgresql<br/>
3. start db client and connect to the container db, details such as credential at database.env<br/>
4. Run sql script in sql folder<br/>
due to time contraint and limited local hard disk space, (else would dockerize all the services :( )<br/>
5. open cmd / terminal, cd into the repo folder: for each of the folders<br/>
  5.1. gateway - npm run start:dev<br/>
  5.2. customer - npm run start:dev<br/>
  5.3. product - npm run start:dev<br/>
  5.4. order - npm run start:dev<br/>
  5.5. payment - npm run start:dev<br/>
  5.6. fe - npm start<br/>
<br/>
In case frontend wasn't working:<br/>
import postman collection to test backend APIs. (required postman)<br/>
<br/>
Explaination:<br/>
<br/>
fe: frontend<br/>
gateway: api gateway<br/>
customer: customer service<br/>
product: product service<br/>
order: order service<br/>
payment: payment service<br/>
<br/>
fe <-> gateway <-> customer<->db<br/>
               <-> product<->db<br/>
               <-> order<->db<br/>
               <-> payment<->db<br/>
Basically all the services are behind api gateway<br/>
<br/>
ToDo:<br/>
1. frontend validation<br/>
2. kafka connect for async streaming of data for each microservices<br/>
3. auth service<br/>