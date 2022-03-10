const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// use ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  // logic to find the date
  var today = new Date();
  var currentDay = today.getDate();
  var day = "";
  if (currentDay === 6 || 0){
    day = "Weekend";
  } else {
    day = "Weekday";
  }
    res.render("list", {kindOfDay: day});
});








app.listen(3000, function(){
  console.log("Listening on port 3000");
});
