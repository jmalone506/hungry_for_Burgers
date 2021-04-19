var connection = require("../config/connection")

function printQuestionMarks(num){
    var array = [];
    for (var i = 0; i < num; i ++){
        array.push("?");
    }
    return array.toString();
};

function sendSql(ss){
    var array = [];
    for(var key in ss){
        var value =ss[key];
        if(Object.hasOwnProperty.call(ss,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value="'"+value+"'";
            }
            array.push(key + "=" + value);
        };
    };
    return array.toString()
};
var orm ={
    selectAll: function(tableInput,cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res)
        })
    },
    insertOne: function (table, cols, vals, cb){
        var queryString = "INSERT INTO "+ table;
        queryString+="(";
        queryString+= cols.toString();
        queryString+=")";
        queryString+="VALUES ("
        queryString+= printQuestionMarks(vals.length);
        queryString+=") ";
    
    connection.query(queryString, vals, function(err, result){
        if (err){
            throw err;
        }
        cb(result)
    })
    },
    updateOne: function (table, objColVals, condition,cb){
        var queryString = "UPDATE "+ table;
        queryString+="SET";
        queryString+= sendSql(objColVals);
        queryString+="WHERE";
        queryString+= condition;
    
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result)
        });
    },
};

module.exports = orm;