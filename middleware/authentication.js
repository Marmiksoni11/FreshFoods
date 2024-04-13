const jwt = require('jsonwebtoken');
const User = require('../models/authModels');

const { UnauthenticatedError } = require('../errors');

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log('authHeader -----> ', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).send('Authentication invalid');
  }

  const token = authHeader.split(' ')[1];


  let userPayload;
  let adminPayload;

  try {
    console.log('------- user');
    // Verify if it's a user token
    // userPayload = jwt.verify(token, process.env.JWT_SECRET);

    // console.log('userPayload -----> ', userPayload);
  } catch (userError) {
    console.log(userError, "user error");
  }
  
  try {
    
    console.log('process.env.JWT_SECRET_ADMIN', process.env.JWT_SECRET_ADMIN);

    console.log('------- admin');
  
  
    console.log('token -----> ', token);

    // If it's not a user token, try to verify if it's an admin token
    adminPayload = jwt.verify(token, process.env.SECRET);

    console.log('adminPayload', adminPayload);
    

    const adminUser = await User.findOne({ adminToken: token });

    console.log('adminUser', adminUser);

    if (!adminUser) {
      return res.status(401).send('Admin user not found');
    }

    req.admin = {
      userId: adminPayload.userId,
      email: adminPayload.email,
      name: adminPayload.name,
      password: adminPayload.password,
      role: adminPayload.role
    };
    next();
  } catch (adminError) {
    console.log(adminError, "admin error");
  }

  // If neither user nor admin token is valid
  if (!userPayload && !adminPayload) {
    return res.status(401).send('Authentication invalid');
  }

  if (userPayload) {
    req.user = {
      userId: userPayload.userId,
      email: userPayload.email,
      name: userPayload.name,
      password: userPayload.password,
      role: userPayload.role
    };
  }

  next();
};

module.exports = { authenticateUser };
