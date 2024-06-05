require('dotenv').config();
const { connectToMongoDB } = require('./src/config/dbConnection');

connectToMongoDB()