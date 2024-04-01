const express = require("express")
    
const {register,login} = require('../controllers/AuthController');
const {authenticateAdmin, authenticateUser} = require('../middleware/authentication');
const {AdminClass} = require('../controllers/AdminController');
const AdminPanel = require('../controllers/adminpanel')
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
// here we have issue with unAuthenticated issue with middleware 
// bcz of jwt related issue!

router.get('/admin/usercount', AdminClass.getUserCount);
router.get('/admin/users', AdminClass.getUsers);


// here we servering Html File =>  admin-panen.html !
// just need to adjust css issue
router.get('/admin/get/panel', authenticateUser , AdminPanel.getAllUser);

module.exports =  router;
