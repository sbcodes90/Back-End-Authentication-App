const express = require('express');
const app = express();
const dbConnect = require("./db/dbConnect");
var cors = require("cors");

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Connect to DB
dbConnect();


//Middleware
app.use(cors());
app.use(express.json());//parses data to json

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  

//Route Middlewares
app.use('/api/user', authRoute); //prefix  /api/user/register or api/user/login
app.use('/api/posts', postRoute);


app.listen(3000, () => console.log('Server running on local host 3000'));
