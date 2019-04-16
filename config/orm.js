// Dependancies
var connection = require('./connection');

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
      }
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? ( ?? ) values ( ? );";
    
        console.log(queryString);
    
        connection.query(queryString, [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      update: function(table, objColVals, condition, cb){
        console.log(condition);
        var queryString = "UPDATE ?? set " + objToSql(objColVals) + " where " + condition;
        connection.query(queryString, table, function(err,result){
            if (err)
                throw err;
            cb(result);
        });
    },
}

module.exports = orm;