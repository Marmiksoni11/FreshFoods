
// const UnauthenticatedError = require('../errors/unauthenticated')
// const BadRequestError =  require('../errors/index');

const  User = require('../models/authModels')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const register = async (req, res) => {
     const user = await User.create({...req.body})
     const token = user.createJWT()
     res.status(StatusCodes.CREATED).json({user:{name : user.name} ,token})
}

const login = async (req, res) => {

    const { email, password } = req.body

    console.log(email , password);
    
    if (!email || !password) {
      // throw new BadRequestError('Please provide email and password')
      return res.status(401).send('Please provide email and password')
    }
    
    const user = await User.findOne({ email })
    
    if (!user) {
      // throw new UnauthenticatedError('Invalid Credentials')
      return res.status(401).send('Invalid Credentials')
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    
    if (!isPasswordCorrect) {
      // throw new UnauthenticatedError('Invalid Credentials')
      // throw new BadRequestError('Invalid Pasword')
      return res.status(401).send('Invalid Password')
    }

    const token = user.createJWT()
    
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
      
}

module.exports = { register, login }