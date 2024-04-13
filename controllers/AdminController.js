const User = require('../models/authModels.js'); 

class AdminClass {
  static AdminUser = async () => {
    try {
      const adminUser = new User({
        
        email: 'marmik123@gmail.com',
        password: 'marmik123',
        username:"marmik123",
        fullname:"marmik soni",
        avatar:"/public/temp/1712744908157-IMG20210711080311.jpg",
        coverImage:"/public/temp/1712744908157-IMG20210711080311.jpg",
        adminToken:"W1bCZJsK/wBU19ffpcwkODB9ivwWTDjA4n432n2+QInqXdg4FhTB+//QOY3Luau3",
        role: 'admin', // Set the role to 'admin'
      });
      
      const adminToken = await adminUser.createJWT_ADMIN(); // Generate the admin token
      console.log('Admin user token:', adminToken);

      adminUser.adminToken = adminToken;
      await adminUser.save();

      console.log('Admin user created successfully.');
      
      return { admin: adminUser.name, token: adminToken };
    } catch (error) {
      console.error('Error creating admin user:', error);
      throw error;
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