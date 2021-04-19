var mysql = require("mysql");
const { connected } = require("process");

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"Cskdmkj@506",
    database:"burgers_db"

});

connection.connect(function(err){
    if (err){
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;