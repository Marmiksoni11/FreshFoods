const User = require('../models/authModels'); 
const getUser = async (req, res) => {
    try {
        const email = req.user.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getUser };


