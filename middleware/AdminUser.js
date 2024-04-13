const jwt = require('jsonwebtoken');
const User = require('../models/authModels.js');

const AdmiUserMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    console.log('token -----> ' , token);
    
    const user = await User.findOne({ adminToken: token });

    console.log('user -----> ' , user);
    
    if (!user) {
      return res.status(401).send('Admin user not found');
    }
    
    
    const payload = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
    
    console.log('payload -----> ' , payload);
    
    if (payload.role !== 'admin') {
      return res.status(403).send('Forbidden');
    }

    // Attach admin details to the request
    req.admin = {
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role
    };

    next();
  } catch (error) {
    return res.status(401).send('Authentication invalid');
  }
};

module.exports = { AdmiUserMiddleware };
