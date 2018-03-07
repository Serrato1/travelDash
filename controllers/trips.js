const knex = require("../db/knex.js");

module.exports = {
  home: function(req, res) {
    res.render('user_trips',{})
  },
  create_trip: function(req, res){
    res.send("You created a trip");
    res.redirect("/trips");
  }
}
