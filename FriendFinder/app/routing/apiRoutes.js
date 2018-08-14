var data = require("../data/friends");

// console.log(data);


// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    app.post("/api/friends", function (req, res) {
        if (req.body) {
            var userInput = req.body;
            console.log("userInput: " , userInput);
            data.push(userInput);

            // res.json({
            //     success: true
            // });
            return res.json(true);
        } else {
            return res.json(false);
        }

    });

    app.post("/api/clear" , function(){
        data = [];
        console.log(data);
    });

    
};