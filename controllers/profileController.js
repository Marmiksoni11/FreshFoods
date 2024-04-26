const User = require("../models/authModels");
const UploadOnCloudnary = require("../utils/cloudinary.service");

const CoverImageUpdate = async (req, res) => {
  try {

    console.log(req.body);
    console.log(req.file);
    console.log(req.user.email);

    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Check if the 'avatar' property exists in the request body
    if (!req.file) {
      return res.status(400).json({ message: 'CoverImage data not provided' });
    }

    // Update avatar for the user with the provided Email
    const userEmail = req.user.email; // Assuming 'userId' is the correct property name
    const cloudinaryResponse = await UploadOnCloudnary(req.file.path);
    const CoverImageUrl = cloudinaryResponse.secure_url; // Extracting the secure URL
    const updatedUserCoverImage = await User.findOneAndUpdate({ email : userEmail}, { coverImage: CoverImageUrl }, { new: true });
    console.log(updatedUserCoverImage)
    if (!updatedUserCoverImage) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'coverImage updated successfully' });
  } catch (error) {
    console.error('Error updating coverImage:', error);
    res.status(500).json({ message: 'Internal server error' });
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
      const userEmail = req.user.email; // Assuming 'userId' is the correct property name
      const cloudinaryResponse = await UploadOnCloudnary(req.file.path);
      const avatarUrl = cloudinaryResponse.secure_url; // Extracting the secure URL
      
      
      const updatedUserAvatar = await User.findOneAndUpdate({email:userEmail}, { avatar: avatarUrl }, { new: true });
       console.log(updatedUserAvatar);
      if (!updatedUserAvatar) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Avatar updated successfully' });
  
    } catch (error) {
      console.error('Error updating avatar:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
  
  module.exports = {CoverImageUpdate,AvatarImageUpdate};