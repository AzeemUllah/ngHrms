const express = require('express');
const router = express.Router();

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();

var userCls = require('./class/User');
var validationsCls = require('./class/Validations');

var user = new userCls();
var validations = new validationsCls();



var passport = require('passport');



/* GET api listing. */
router.post('/create-user', function(req, res){
  var data = req.body;
  if(data == undefined || Object.keys(data).length == 0){
    res.json({"Status": "Error", "Error": "Request Error. ", "Details": "No data in request body"});
  }else {
    var validations_error = validations.isValidUserSignup(data.email, data.firstname, data.lastname, data.password, data.phone, data.role, data.username);
    if (validations_error == "") {
      var userCreationStatus = user.createUser(data.email, data.firstname, data.lastname, data.password, data.phone, data.role, data.username, function(data){
        if (data.code == 0) {
          console.log(data.id);
          res.json({"Status": "Ok", "Error": "", "Details": data.id});
        }
        else if (data.code == 1) {
          console.log("1");
          res.json({"Status": "Error", "Error": "500", "Details": data.details});
        }
        else if (data.code == 2) {
          console.log("2");
          res.json({"Status": "Error", "Error": "Dublicate User", "Details": data.details});
        }
      });
    }
    else {
      res.json({"Status": "Error", "Error": "Validations Error", "Details": validations_error});
    }
  }
});



module.exports = router;
