require('dotenv').config();
const express = require('express')
const { createServer } = require('http');
const { connectToMongoDB } = require('./src/config/dbConnection');

const router = require('./src/routes');

const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const app = express()
connectToMongoDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./src/public'))

app.set('view engine','ejs');
app.set('views' , './src/views');




app.use(router)
const server = new createServer(app)

server.listen(port, () => console.log(`server listening on port ${port}!`))
