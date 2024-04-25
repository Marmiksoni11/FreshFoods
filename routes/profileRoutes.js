const express = require("express");
const { CoverImageUpdate, AvatarImageUpdate } = require("../controllers/profileController");
const authenticateUser = require("../middleware/authentication");
const upload = require("../utils/profileUpUtils");
const router = express.Router();

// Update Cover Image Endpoint

router.route('/update-cover-image').post(authenticateUser,upload.single('coverImage'),CoverImageUpdate)
  
// Update Avatar Endpoint
router.route('/update-avatar').post(authenticateUser,upload.single('avatar'),AvatarImageUpdate)

module.exports = router;