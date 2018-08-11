module.exports = function(x){

    if(x == "/"){

        app.get(x , function(req , res){
            res.sendFile(path.join(__dirname , "app/public/" , "home.html"));
        });

    }else if (x == "/survey"){
        app.get(x , function(req , res){
            res.sendFile(path.join(__dirname , "app/public/" , "survey.html"));
        });
    }else{

        return false;
    }
};