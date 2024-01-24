Back End Authentication App featuring JWTs

This is a back end application that you can test on Postman. 

It utilizes Node.JS, a simple mongoDB database that stores new user info (username, password, and email address), and a rest api built with express.js that has a login route and a register route where a user can sign up or log in.

If the user successfully logs in, they will recieve a JWT token which they can use an pass in headers to get to the posts route which is a private route. 
All user passwords are encrypted and stored in the Mongo DB.
Also features validation on user submitted information using hapi/joi :-)

Front End coming soon!......

Note: Run this application in your vs code terminal using npm start and the database and server connections will automatically start