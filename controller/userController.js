const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const user = require("../model/user");

const userController = {
    //register
    Registration: asyncHandler(async (req,res)=>{
        const {username, email, password} = req.body;
        //!Validation
        if(!username || !email || !password){
            throw new Error("Please all fields are required");
        }
        //!Check if user already exists
        const userExists = await User.findOne({email});
        if(userExists){
            throw new Error("User already exists");
        }
        //!Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //!Create the user
        const userCreated = await User.create({
            username,
            password: hashedPassword,
            email,
        });

        //!Send the response
        res.json({username: userCreated.username, email: userCreated.email, id: userCreated.id});
        res.json({message:"Register"});
    }),
    //login
    login: asyncHandler(async (req,res)=>{
        const {email, password} = req.body;
        //!check if user email exists
        const user = await User.findOne({email});
        if(!user){
            throw new Error("Invalid credentials");
        }
        //!check if user password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error("Invalid credentials");
        }
        //!Generate the token
        const token = jwt.sign({id: user._id}, 'anyKey', {expiresIn:'30d'});
        //!Send the response
        res.json({
            message: "Login success",
            token,
            id: user._id, 
            email: user.email, 
            username: user.username
        });
    }),
    //profile
    profile: asyncHandler(async(req,res)=>{
        //Find the user
        const user = await User.findById(req.user).select('-password');
        res.json({user});
    }),
};

module.exports = userController;