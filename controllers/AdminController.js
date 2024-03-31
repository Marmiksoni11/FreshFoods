const User = require('../models/authModels.js'); 


const AdminUser = async () => {
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

const getUserCount = async (req, res) => {
  try {
      // Query the database to get the count of users
      const userCount = await User.countDocuments();

      // Send the user count as JSON response
      res.json({ count: userCount });
  } catch (error) {
      console.error('Error fetching user count:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}



// Call the function to create the admin user
module.exports = {AdminUser,getUserCount};