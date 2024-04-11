const multer = require("multer");

// Set storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Define destination folder for uploaded files
      // we are fistly store file into the locally for backup!
      cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
      // Define filename for uploaded files
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  // Create multer instance
  // first we need to import this on router!  
  
  const upload = multer({ storage });
  module.exports =  upload;