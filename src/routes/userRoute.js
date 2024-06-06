const { viewRegister, register } = require('../controllers/userController');

const path = require('path')
const multer = require('multer')

const userRoute = require('express').Router();

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , path.join(__dirname, '../public/images'))
    },
    filename: function(req, file, cb){
        const name = Date.now()+ '-'+file.originalname;
        cb(null , name)
    }
})

const upload = multer ({storage : storage})
userRoute.get('/register', viewRegister);
userRoute.post('/register',upload.single('image') ,register);

module.exports = userRoute