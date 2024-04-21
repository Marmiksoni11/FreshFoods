const  User = require('../models/authModels')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Create User Admin Panel Route
const createUser = async (req, res) => {

    //*   FIELDS : 
    //    {
    //      "name":"userTry",
    //      "email":"userTry@yopmail.com",
    //      "password":"userTry12234",
    //      "make_admin":false
    //    }
  
    const { make_admin } = req.body

    console.log("req.body", req.body);
    
       const temp = {...req.body}
       if(make_admin){
          temp.role = "admin";
        } else { 
          temp.role = "user";
        }
       const user = await User.create(temp)
       const token = user.createJWT()
       res.status(StatusCodes.CREATED).json({user:{name : user.name} ,token})
  }

  module.exports = {createUser}