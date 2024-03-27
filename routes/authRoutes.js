const express = require("express");
let randomClas = require('../controllers/random');
const {register,login} = require('../controllers/AuthController');

const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)

router.get('/login',randomClas.loginpage);
router.get('/home',randomClas.getHome);
router.get('/register',randomClas.registerPage)
router.get('/profile',randomClas.profilePage);
router.get('/contactUs',randomClas.contactUs);
router.get('/shoppingCart',randomClas.shoppingCart);
router.post('/login',randomClas.VarificationLogin);



module.exports = router
