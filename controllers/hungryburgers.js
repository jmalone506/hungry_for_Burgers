var express = require("express");

var router = express.Router();

var hungryBurgers = require("../models/burger.js")

router.get("/", function(req, res){
    hungryBurgers.all(function(data){
        var bObject ={
            burgers: data
        }
        res.render("index", bObject)
    });
});

router.post("/api/burgers", function(req, res){
    hungryBurgers.create([
        "burger_name", "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function( result){
        res.json({ id: result.insertId})
    })
})

router.put("/api/burgers/:id", function (req, res){
    var params = "id =" + parseInt(req.params.id);
    hungryBurgers.update({
        devoured: 1
    }, params, function(result){
        if(result.changeRows == 0){
            return res.status(404).end()
        }else{
            res.status(200).end()
        }
    });
})
module.exports = router;