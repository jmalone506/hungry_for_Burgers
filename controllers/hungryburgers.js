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
    ])
})