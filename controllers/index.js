const knex = require("../db/knex.js");

module.exports = {
  home: function(req, res) {
    res.render("user_login.ejs")
  },
  create_user: function(req, res){
    knex('users')
    .insert({
      name : req.body.name ,
      email : req.body.email ,
      password : req.body.password
    })
    .then((result)=>{
      res.redirect('/');
    })
    .catch((error)=>{
      console.log(error);
      res.sendStatus(500);
    })

  },
  signup: function(req,res){
     res.render('create_user.ejs');
  },
  signin: function(req,res){
    knex("users")
    .where({
      name : req.body.name,
      password : req.body.password
    })
    .then((result)=>{
      res.redirect('/trips');
    })
    .catch((error)=>{
      console.log(error);
      res.sendStatus(500);
    })
  }
}
