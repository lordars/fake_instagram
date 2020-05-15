const  {Usuario} = require("../models")
const bcrypt = require("bcrypt")
const  session = require("express-session")

const AuthController = {
    
    showLogin: (req,res) => {
        let err =
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },
    login : async (req,res)=>{
        let {email,senha} = req.body; 
        let usuario = await Usuario.findOne({where:{email}});
       if(!usuario){
           res.redirect("/?error=1")
       }
       if (!bcrypt.compareSync(senha,usuario.senha)){
        res.redirect("/?error=1")
       }
      //req.session.usuario = usuario;
       return res.redirect("/home");

       
}}

module.exports = AuthController;