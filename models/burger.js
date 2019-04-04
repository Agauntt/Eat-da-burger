var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    }, 
    // the variables cols and vals are arrays
    InsertOne: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

// export all db functions 
module.exports = burger;
