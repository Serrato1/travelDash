const knex = require("../db/knex.js");

module.exports = {
  home: function(req,res){
    knex('airline')
      .select('*')
      .then((result)=>{
        res.render('airline_login',{airlines: result});
      })
      .catch((error)=>{
        console.log(error)
      })

  },
  login_submit:function(req,res){
    let airline_id = req.body.selected_airline;
    console.log(airline_id);
    res.redirect(`/airlines/${airline_id}/flights`);
  },
  create_airline: function(req, res){
    console.log("RECIEVED CREATE");
    knex("airline")
    .insert({
      name : req.body.name ,
      description : req.body.description ,
    })
    .then((result)=>{
      res.redirect("/airlines/login");
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  flights: function(req,res){
    let airline_id = req.params.id;
    knex.select('*').from("flights")
    .innerJoin('airline','flights.airline_id','airline.id')
    .where('flights.airline_id', airline_id)
    .then(function(result){

        if (result){
          res.render("airline_flights",{
            flights:result,
            airline_id: req.params.id
          })
        } else {
          knex('airline')
            .select("*")
            .where('id', req.params.id)
            .then(function(result){
              res.render("airline_flights", {
                flights: null,
                airline_id: req.params.id,
                airline_name: result[0].name
              })
            })
        }

    })
  },
  create_flight : function(req,res){
    knex("flights")
    .insert({
      start : req.body.start ,
      destination : req.body.destination ,
      airline_id : req.params.id
    })
    .then((result)=>{
      res.redirect(`/airlines/${req.params.id}/flights`);
    })
    .catch((error)=>{
      console.log(error);
      res.sendStatus(500);
    })
  }

}
