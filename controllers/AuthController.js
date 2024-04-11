const User = require('../models/authModels');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const UploadOnCloudnary = require("../utils/cloudinary.service");
require('dotenv').config({ path: "./.env" });

const register = async (req, res) => {
    try {
        
      const { fullname, email, username, password } = req.body;
        if (!req.body) return res.send("response not got!");
        console.log(email, username, fullname, password);

        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Check and process avatar file
        const avatarLocalFilePath = req.files?.avatar[0]?.path;
        if (!avatarLocalFilePath) {
            return res.status(400).json({ message: "Avatar file required!" });
        }

        const avatar = await UploadOnCloudnary(avatarLocalFilePath);
        console.log(avatar, "avatar image uploaded successfully !");

        // Check and process cover image file
        const coverLocalFilePath = req.files?.coverImage[0]?.path;
        if (!coverLocalFilePath) {
            return res.status(400).json({ message: "Cover Image file required!" });
        }
        const coverImage = await UploadOnCloudnary(coverLocalFilePath);
        console.log(coverImage, "coverImage uploaded!");

        // Create user
        const user = await User.create({
            fullname,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username
        });

        console.log(user, "user created successfully!");

        // Retrieve created user without password
        const createdUser = await User.findById(user._id).select("-password");

        // Create JWT token
        const token = await user.createJWT();

        // Send response
        res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
    } catch (error) {
        console.log(error, "register user failed!");
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to register user" });
    }
}


const login = async (req, res) => {
    
    const mail = req.body.mail;
    const pwd = req.body.pwd
    
    console.log("jfkshsafh");

    console.log(mail , pwd);
    
    if (!(mail && pwd)) {
        return res.status(401).send('Please provide email and password...');
    }
    
    try {
        const user = await User.findOne({ email: mail });
        
        if (!user) {
            return res.status(401).send('Invalid Credentials');
        }
        
        const isPasswordCorrect = await user.isPasswordCorrect(pwd);
        
        if (!isPasswordCorrect) {
            return res.status(401).send('Invalid Password');
        }
    
        const AccessToken = await user.createJWT();
        
        return res.status(StatusCodes.OK).json({ user: { name: user.name }, AccessToken });
    
    } catch (error) {
        console.error('Login failed:', error);
        return res.status(500).json({ message: 'Failed to log in' });
    }
  }
  

module.exports = { register, login };
