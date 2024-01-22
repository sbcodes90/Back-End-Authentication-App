const express = require('express');
const app = express();

//Import routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute); //prefix  /api/user/register or api/user/login


app.listen(3000, () => console.log('Server running on local host 3000'));
