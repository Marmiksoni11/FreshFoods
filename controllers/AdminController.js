const User = require('../models/authModels.js'); 

class AdminClass {
  static AdminUser = async () => {
    try {
      const adminUser = new User({
        name: 'marmik',
        email: 'marmik11@gmail.com',
        password: 'marmik11',
        role: 'admin', // Set the role to 'admin'
      });
  
      // Save the user to the database 
      await adminUser.save();
  
      console.log('Admin user created successfully.');
    } catch (error) {
      console.error('Error creating admin user:', error);
    }
  }

  static getUserCount = async (req, res) => {
    try {
      // Query the database to get the count of users
      const userCount = await User.countDocuments();
  
      // Send the user count as JSON response
      res.status(200).json({ userCount });
      console.log(userCount);
    } catch (error) {
      console.error('Error fetching user count:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static getUsers = async (req, res) => {
    try {
      // Query the database to get the count of users
      const users = await User.find();
  
      // Send the user count as JSON response
      res.status(200).json({ data: users });
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } 
}





// Call the function to create the admin user
module.exports = {AdminClass};