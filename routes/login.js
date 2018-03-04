const express = require('express');
const router = express.Router();

var passport = require('passport');

var userCls = require('./class/User');
var loginCls = require('./class/Login');
var validationsCls = require('./class/Validations');

var user = new userCls();
var login = new loginCls();
var validations = new validationsCls();


router.post('/', function(req, res, next) {
  var data = req.body;
  if(data == undefined || Object.keys(data).length == 0){
    res.json({"Status": "Error", "Error": "Request Error. ", "Details": "No data in request body. "});
  }
  else{
    var validations_error = validations.isValidlogin(data.email,data.password);
    if (validations_error == "") {
      user.doesExsists(data.email, function (data) {
        if(data == true){
          passport.authenticate('local',
            function (data, state, details){
              console.log("faliure " + data + " " + state + " " + details + " ");
              if(state == true){
                res.json({"Status": "Ok", "Error": "", "Details": details.uid});
              }
              else{
                res.json({"Status": "Error", "Error": "Login Failed", "Details": details.message});
              }
              res.send(req.user);
            })(req, res, next);
        }
        else{
          res.json({"Status": "Error", "Error": "Email doesn't exists", "Details": "Your email isn't regestered yet."});
        }
      });






    }
    else {
      res.json({"Status": "Error", "Error": "Validations Error", "Details": validations_error});
    }
  }


}
);

module.exports = router;
