const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  // logic to find the date
  var today = new Date();
  if (today.getDay() === 6 || 0){
    res.write("<h1>Congrats! Its the Weekend!</h1>");
  } else {
    res.write("<p>You gotta get to work!</p>");
    res.write("<h1>Drat, still the work week eh?</h1>");
    res.send();
  }

});








app.listen(3000, function(){
  console.log("Listening on port 3000");
});
