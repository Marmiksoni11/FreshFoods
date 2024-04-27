const express = require("express");
const multer = require("multer");
const { CoverImageUpdate, AvatarImageUpdate } = require("../controllers/profileController");


const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination directory for uploaded files
    cb(null, "./temp"); // Use "uploads/temp" as the destination directory
  },
  filename: function (req, file, cb) {
    // Define the filename for uploaded files
    cb(null, file.originalname); // You can customize the filename if needed
  },
});

const upload = multer({ storage: storage });
module.exports = upload;