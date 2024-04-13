const express = require("express")
    
const {register,login} = require('../controllers/AuthController');
const {authenticateUser} = require('../middleware/authentication');
const {AdminClass} = require('../controllers/AdminController');
const AdminPanel = require('../controllers/adminpanel')
const router = express.Router();
const upload = require("../middleware/multer.middleware");
const getUserDetails = require("../controllers/user.controller");
const { AdmiUserMiddleware } = require("../middleware/AdminUser");

router.get('/user', authenticateUser , getUserDetails);


router.route('/register').post(
    upload.fields([
        {
            // define file name first
            name:"avatar",
            // second howmany file axpect?
            maxCount:1
        },
        {
            // define file name first
            name:"coverImage",
            // second howmany file axpect?
            maxCount:1
        },]),register);
        
router.route('/login').post(login);

// here we have issue with unAuthenticated issue with middleware 
// bcz of jwt related issue!

router.get('/admin/usercount', AdminClass.getUserCount);
router.get('/admin/users', AdminClass.getUsers);

router.post('/admin/create', async (req, res) => {
    try {
      
      const { admin, token } = await AdminClass.AdminUser();
      res.status(200).json({ admin, token });
    } catch (error) {
      console.error('Error creating admin user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

 
  
// here we servering Html File =>  admin-panen.html !
// just need to adjust css issue

router.get('/admin/get/panel',authenticateUser,AdminPanel.getAllUser );

module.exports =  router;
