const { login,register } = require("./AuthController");
const UserModel = require("../models/authModels");
class RandomClass {
    static loginpage = (req,res)=>{
        res.render('index');
    }
    static getHome = (req,res)=>{
        res.render('home');
    }
    static registerPage = (req,res)=>{
        res.render('register');
    }
    static profilePage = (req,res)=>{
        res.render('profile');
    }
    static contactUs = (req,res)=>{
        res.render('contactUs');
    }
    static shoppingCart = (req,res)=>{
        res.render('shoppingCart');
    }
    static VarificationLogin = async (req,res)=>{
        const {email} = req.body;

        try {
         
            if(!login)   {
            res.redirect('/register');
         }
         
         const data = await UserModel.findOne({ email:email });
         console.log(data.email, data.id ,data.name);
         
         res.render('home',{data});
         
        } catch (error) {
            console.log(error);
        }
    }
    
}
module.exports = RandomClass;