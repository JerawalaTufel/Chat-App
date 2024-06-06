
const {User} = require('../models/userModel');
const  bcrypt = require('bcrypt');
const viewRegister = async (req , res) => {
try {

    res.render('register');
    
} catch (error) {
    
}

}

const register = async (req, res) => {

    try {
        const reqParam = req.body;
        const passwordHash = await bcrypt.hash(reqParam.password, 10);
      
        obj = {
            name : reqParam.name,
            email : reqParam.email,
            image : 'images/'+ req.file.filename,
            password : passwordHash
        }
        const registerUser = await User.create(obj);

        res.render ('register', {
            message : "registered"
        });
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    viewRegister,
    register
}