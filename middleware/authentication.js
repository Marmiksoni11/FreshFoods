// const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticateUser = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    // throw new UnauthenticatedError('Authentication invalid')
    return res.status(401).send('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    console.log('payload' , payload);
    
    // attach the user to the job routes
    req.user = { 
      userId: payload.userId, 
      name: payload.name, 
      email: payload.email, 
      role: payload.role
    }
    next()
  } catch (error) {
    // throw new UnauthenticatedError('Authentication invalid')
    return res.status(401).send('Authentication invalid')
  }
}

module.exports = authenticateUser
