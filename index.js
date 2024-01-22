const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


dotenv.config();

//Connect to DB
const mongoInfo = process.env.DB_KEY;
mongoose.connect(mongoInfo);

const database = mongoose.connection;

database.once('connected', () => {
    console.log('Database Connected');
})

database.on('error', (error) => {
    console.log(error)
})

//Middleware
app.use(express.json());//parses data to json


//Route Middlewares
app.use('/api/user', authRoute); //prefix  /api/user/register or api/user/login
app.use('/api/posts', postRoute);


app.listen(3000, () => console.log('Server running on local host 3000'));
