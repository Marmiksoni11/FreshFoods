const User = require("../models/authModels");

const CoverImageUpdate = async (req, res) => {
    try {
      
      console.log(' ---- > ', req.body );
      console.log(' ---- > ', req.file );
      // console.log("req.user",req.user)
      
      // console.log()
      // Get the file path of the uploaded cover image
      const coverImagePath = req.file.path;

      console.log('coverImagePath', coverImagePath);
      
      const userId = req.user.id;

      const user = await User.findOne(userId);
      // console.log(user);
      user.coverImage = coverImagePath;
      await user.save();
  
      res.status(200).json({ message: 'Cover image updated successfully' });
    } catch (error) {
      console.error('Error updating cover image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  

  const AvatarImageUpdate = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'User not authenticated' });
      }
  
      // Check if the 'avatar' property exists in the request body
      if (!req.file) {
        return res.status(400).json({ message: 'Avatar data not provided' });
      }
  
      // Update avatar for the user with the provided ID
      const userId = req.user.userId; // Assuming 'userId' is the correct property name
      const updatedUser = await User.findByIdAndUpdate(userId, { avatar: req.file.path }, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Avatar updated successfully' });
    } catch (error) {
      console.error('Error updating avatar:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
  
  module.exports = {CoverImageUpdate,AvatarImageUpdate};