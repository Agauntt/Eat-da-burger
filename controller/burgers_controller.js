var express = require("express");

var router = express.Router();

// import model burger.js to use its db functions
var burger = require("../models/burger.js");

// default route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.name);
    burger.create("burger_name", req.body.name, function(result){
        res.json({ id: result.innerID });
    });
});

module.exports = router;