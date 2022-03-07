const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  // logic to find the date
  var today = new Date();
  if (today.getDay() === 6 || 0){
    res.sendFile(__dirname +"/weekend.html");
  } else {
    res.sendFile(__dirname +"/weekday.html");
    res.send();
  }

});








app.listen(3000, function(){
  console.log("Listening on port 3000");
});
