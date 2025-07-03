# postgresqlNode
A SIMPLE DEMONSTRATION OF NODE.JS AND POSTGRESQL DATABSE

REQIREMENTS
# install node.js
# install Express with npm: npm istall express (window)
install pg: npm install pg --save

 TESTING WITH POSTMAN
 # install postman
 # your program running on localhost, port 3000
 # having in place a running POSTGRESQL SERVER WITH A users table created

 CREATE A TABLE
 #install POSTGRESQL
 # open the SQL SHELL
 # type in the code:

 CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

 
 TEST EACH CRUD 
 POST
 URL: http://localhost:3000/users
 json
 {
  "name": "Alice",
  "email": "alice@example.com",
  "age": 30
}
response: a newly created user

GET
URL:http://localhost:3000/users
RESPONSE: an array of users in the database

PRO TIPS
  Use collections in Postman to save and organize your requests.

  Add tests in the “Tests” tab to automate response validation.

  Use environment variables for base URLs and tokens if needed.

Want help writing Postman tests or setting up a collection? I’ve got you covered!


