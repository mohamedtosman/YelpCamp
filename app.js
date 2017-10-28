var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill", image: "https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"}
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
})


//Tell Express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!!!")
});