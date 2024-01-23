const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
mongoose.connect(process.env.DB_KEY,
).then(() => {
        console.log("Successfully connected to Mongo DB")
    }).catch((error) => {
        console.log("Unable to connect to Mongo DB");
        console.error(error);
    });
}

module.exports = dbConnect;