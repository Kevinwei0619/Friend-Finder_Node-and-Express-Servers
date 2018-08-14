var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var peopleList = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// console.log(peopleList);

var app = express();
var PORT = process.env.PORT || 3000;


// app.use(express.static(__dirname + '/app/public'));
app.use(express.static(path.join(__dirname, '/app/public')));

//裡面得image參數,是虛擬路徑
app.use('/images',express.static(__dirname + '/app/public'));



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/api/friends', function (req, res) {
    res.json(peopleList);
});


app.post("/api/friends", function (req, res) {
    if (req.body) {
        var userInput = req.body;
        console.log(userInput);
        peopleList.push(userInput);

        // res.json({
        //     success: true
        // });
         res.json(true);
    } else {
         res.json(false);
    }

});


htmlRoutes(app);
// apiRoutes(app);
// require("./app/routing/apiRoutes.js")(app);


app.listen(PORT , function(){
    console.log("App listening on PORT: " , PORT);

});