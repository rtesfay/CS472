
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Welcome@1234",
  database: "entries",
});


con.connect(function (err) {
if (err) {throw err;
return;}
console.log("connected");
});

 module.exports = {

  getWord: function(query,callback){
    con.query("SELECT * FROM entries where word='"+query+"'", function (err, result, fields) {
   if (err) throw err;

   console.log(result);
     return callback({success: true, data: result});
   });
    }
  }//getWord;

