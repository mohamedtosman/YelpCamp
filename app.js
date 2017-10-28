var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


//Tell Express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Move App has started!!!")
});