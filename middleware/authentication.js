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
    // attach the user to the job routes
    req.user = { userId: payload.userId, email:payload.email, name: payload.name ,password:payload.password ,role:payload.role}
    const decoded = jwt.decode(token);
    console.log(payload.userId,payload.email,payload.role);
    next();
  } catch (error) {
    // throw new UnauthenticatedError('Authentication invalid')
    return res.status(401).send('Authentication invalid')
  }
}

const authenticateAdmin = (req, res, next) => {

  console.log('req --------- > >>> ',req);


  // Extract the JWT token from the request headers
  console.log("------- ");

  const authHeader = req.headers.authorization;
  
  console.log('authHeader',authHeader);
  console.log("............");
  // Check if the authorization header exists and starts with 'Bearer'
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    console.log('authHeader in if',authHeader);
    return res.status(401).json({ error: 'Authentication failed' });
  }
  // Split the authorization header to get the token
  const token = authHeader.split(' ')[1];
  console.log('token',token)
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // attach the user to the job routes
    req.user = { 
      userId: payload.userId,
      email:payload.email,
      name: payload.name ,
      password:payload.password ,
      role:payload.role
    }
    const decoded = jwt.decode(token);
    console.log(payload.userId,payload.email,payload.role);
    next();
  } catch (error) {
    // throw new UnauthenticatedError('Authentication invalid')
    return res.status(401).send('Authentication invalid')
  }
}




module.exports =  {authenticateUser,authenticateAdmin};
