const { create } = require("express-handlebars")
var orm = require("../config/orm")
const { param } = require("../controllers/hungryburgers")

var hungryBurgers = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })

    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, params, cb){
        orm.update("burgers", objColVals, params,function(res){
            cb(res);
        });

    },
delete: function(params, cb){
 orm.delete("burgers", params, function(res){
     cb(res);
    })
    }
};
module.exports = hungryBurgers;