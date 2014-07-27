var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Rachel";
	app.get("/", function (req, resp) {
    var obj = {
      "name": myName,
      "food": "Pizza:",
      }
    resp.render("index", obj );
	});

  app.get("/icecream/:flavor", function(req, resp) {
    resp.render("icecream", { flavor: req.params.flavor });
  });
  
  app.get("/travel", function(ref, resp) {
   db.findArray({}, function(results) {
     var params = {
       "places": results 
     }
       resp.render("travel", params);
   })
  });
     app.get("/travel/rating/:rating", function(ref, resp) {
       var rating = parseInt(req.params.rating);
       db.findArray({ rating: rating }, function(results) {
     var params = {
       "places": results 
     }
       resp.render("travel", params);
     })
  });
   
  

               
})  