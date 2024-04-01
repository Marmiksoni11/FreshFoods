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
  // Extract the JWT token from the request headers
  console.log("fdgdfgdg");
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  console.log("............");
  // Check if the authorization header exists and starts with 'Bearer'
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    console.log("///////////");
    return res.status(401).json({ error: 'Authentication failed' });
  }

  // Split the authorization header to get the token
  const token = authHeader.split(' ')[1];
  console.log(token);
  // Verify the JWT token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.user = { 
        userId: payload.userId, 
        email: payload.email, 
        name: payload.name, 
        password: payload.password, 
        role: payload.role 
      };

      // Check if the user role is admin
      if (payload.role !== 'admin') {
        return res.status(403).json({ error: 'Unauthorized access' });
      }

      // If the user is authenticated and is an admin, proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error('Error decoding token:', error.message);
      return res.status(401).json({ error: 'Authentication failed' });
    }
  });
}




module.exports =  {authenticateUser,authenticateAdmin};
