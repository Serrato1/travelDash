//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const trips = require("../controllers/trips.js");
const airlines = require("../controllers/airlines.js");
module.exports = function(app){
  app.get('/', index.home);
  app.post('/', index.signin);

  app.get('/signup', index.signup);
  app.post('/create', index.create_user)

  app.get('/trips', trips.home);
  app.post('/trips', trips.create_trip);

  app.get('/airlines/login',airlines.home);
  app.post('/airlines/login', airlines.login_submit);
  app.post('/airlines/create',airlines.create_airline)

  app.get('/airlines/:id/flights',airlines.flights);
  app.post('/airlines/:id/flights',airlines.create_flight);
}
//1	[ / ][POST] - Create User -> REDIRECT /TRIPS
// 2	[/trips][] – Message “Hello user “ @ top of page
// 3	[/trips][POST] – Create Trip (includes drop down of FLIGHTS) -> REDIRECT /TRIPS
// 4	[/airline/new] [POST] – Create Airline -> REDIRECT /airline
// 5	[/airline/login] [POST] – Login Submission Form (dropdown of AIRLINES) ->REDIRECT [/airline] (include user id)
// 6	[/airline][] – Return list of flights associated with airline logged in as
