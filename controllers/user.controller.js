
const User = require('../models/authModels'); 
const getUserDetails = async (req, res) => {
    try {
        
        const userId = req.user.email;
        console.log(userId);
        // Query the database to fetch user details
        const user = await User.findOne({ email: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send user details in the response
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getUserDetails ;
