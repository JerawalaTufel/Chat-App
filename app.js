require('dotenv').config();
const express = require('express')
const { createServer } = require('http');
const { connectToMongoDB } = require('./src/config/dbConnection');
const path = require('path')
const multer = require('multer')
const router = require('./src/routes');

const port = process.env.PORT || 3000

const app = express()
connectToMongoDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views' , './views');

app.use(express.static('public'))


const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , path.join(__dirname, './public/images'))
    },
    filename: function(req, file, cb){
        const name = Date.now()+ '-'+file.originalname;
        cb(null , name)
    }
})

const upload = multer ({storage : storage})

app.use(router)
const server = new createServer(app)

server.listen(port, () => console.log(`server listening on port ${port}!`))
