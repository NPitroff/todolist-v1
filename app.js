const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  // logic to find the date
  var today = new Date();
  if (today.getDay() === 6 || 0){
    res.send("Congrats! Its the Weekend!");
  } else {
    res.send("Drat, still the work week eh?")
  }

});








app.listen(3000, function(){
  console.log("Listening on port 3000");
});
