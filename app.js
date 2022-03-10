const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// use ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  // logic to find the date
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  if (currentDay === 0){
    day = "Sunday";
  } else if(currentDay === 1) {
    day = "Monday";
  } else if(currentDay === 2) {
    day = "Tuesday";
  } else if(currentDay === 3) {
    day = "Wednesday";
  } else if(currentDay === 4) {
    day = "Thursday";
  } else if(currentDay === 5) {
    day = "Friday";
  } else if(currentDay === 6) {
    day = "Saturday";
  }
    res.render("list", {kindOfDay: day});
});








app.listen(3000, function(){
  console.log("Listening on port 3000");
});
