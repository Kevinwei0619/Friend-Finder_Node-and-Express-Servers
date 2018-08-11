var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var peopleList = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes");

console.log(peopleList);

var app = express();
var PORT = process.env.PORT || 3000;


// app.use(express.static(__dirname + '/app/public'));
app.use(express.static(path.join(__dirname, '/app/public')));

//裡面得image參數,是虛擬路徑
app.use('/images',express.static(__dirname + '/app/public'));



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var peopleList = [
//     {
//         name:"kkk",
//         photo:"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
//         scores:[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//      }
// ];




// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.


app.get("/" , function(req , res){
    res.sendFile(path.join(__dirname , "app/public/" , "home.html"));
});

app.get("/survey" , function(req , res){
    res.sendFile(path.join(__dirname , "app/public/" , "survey.html"));
});




// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

app.get("/api/friends" , function(req , res){
    return res.json(peopleList);
});

app.post("/api/friends" , function(req , res){
   
    if(req.body){
        var userInput = req.body;
        console.log(userInput);
        peopleList.push(userInput);
        
        return res.json(true);
    }else{

        return res.json(false);
    }
   




});


// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, "404.html"));
//   });


app.listen(PORT , function(){

    console.log("App listening on PORT: " , PORT);


});