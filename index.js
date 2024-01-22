require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
//Import routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute); //prefix  /api/user/register or api/user/login


app.listen(3000, () => console.log('Server running on local host 3000'));
