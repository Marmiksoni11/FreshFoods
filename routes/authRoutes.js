const express = require("express")
    
const {register,login} = require('../controllers/AuthController');
const {authenticateAdmin} = require('../middleware/authentication');
const {getUserCount} = require('../controllers/AdminController');
const AdminPanel = require('../controllers/adminpanel')
const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.get('/admin/userCount', authenticateAdmin, getUserCount);



router.get('/admin/get/panel',AdminPanel.getAllUser);

module.exports =  router;
