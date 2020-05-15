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
        const {email,senha} = req.body; 
        let Usuario = await Usuario.findOne({where:{email}});
       if(!Usuario){
           res.redirect("/?error=1")
       }
       if (!brcrypt.compareSync(senha,Usuario.senha)){
        res.redirect("/?error=1")
       }
      //req.session.usuario = usuario;
       return res.redirect("/home");

       
}}

module.exports = AuthController;