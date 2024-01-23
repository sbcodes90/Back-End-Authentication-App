//authentication routes
const User = require('../model/User');
const router = require('express').Router();
const  { registerValidation, loginValidation } = require('../validation');
//validation
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const schema = Joi.object({
    userName: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
    email: Joi.string().min(10).max(255).required().email()

});

router.post('/register', async (req, res) => {
   
   //validate data before we make a new user
   const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error);

    //Check if new user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //encrypt password
    const complexity = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, complexity);


    //Create a new user
    const user = new User({
        userName: req.body.userName,
        password: hashedPassword,
        email: req.body.email
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
   
    //validate data before we log in
    const {error} = loginValidation(req.body);
     if(error) return res.status(400).send(error);
 
     //Check if email exists
     const user = await User.findOne({email: req.body.email});
     if(!user) return res.status(400).send('Email is not found');
 
     //Check if password is correct
     const correctPass = await bcrypt.compare(req.body.password, user.password);
     if (!correctPass) return res.status(400).send('Invalid Password')

     //Create JWT token when user logs in succesfully they are assigned a id
     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
     res.header('auth-token', token).send(token);
     res.send(`Success!`)
 });


module.exports = router;
