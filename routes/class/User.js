'use strict';
class User{

  constructor() {
    this.admin = require("firebase-admin");
    this.bcrypt = require('bcrypt');
    this.validator = require('validator');
    this.db = this.admin.database();
    this.userRef = this.db.ref("user");
    this.TAG = "Class: User ";
    this.saltRounds = 10;
  }

  doesExsists(email, callback){
    var counter = 0;
    var alreadySent = false;
    this.userRef.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        if(childSnapshot.child("email").val().toString().trim() == email) {
          alreadySent = true;
          callback(true);
        }
        counter += 1;
        if(counter == snapshot.numChildren() && alreadySent == false){
          callback(false);
        }
      });
    });
  }

  createUser(email,firstname,lastname,password,phone,role,username, callback) {
    var that = this;
    that.doesExsists(email, function(data){
      if(data == false){
        var hash = that.bcrypt.hashSync(password, that.bcrypt.genSaltSync(that.saltRounds));
        var key = that.userRef.push().getKey();
        console.log(key);
        that.userRef.child(key).set({
          "email": email,
          "firstname": firstname,
          "lastname": lastname,
          "password": hash,
          "phone": phone,
          "role": role,
          "username": username
        }, function (error) {
          if (error) {
            console.log(that.TAG + "Function: createUser Error:" + error);
            callback({"code": 1, "details": "Internal Server Error"});
            return;
          } else {
            callback({"code": 0, "id": key});
            return;
          }
        });
      }
      else if(data == true) {
        callback({"code": 2, "details": "Email Already Exists"});
        return;
      }
    });
  }



  logIn(email,password,callback){
    var that = this;
    this.userRef.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        if(childSnapshot.child("email").val() == email) {
          if(that.bcrypt.compareSync(password, childSnapshot.child("password").val())){
            callabck(snapshot.key);
          }
        }
      });
      callback("");
    });
  }

}
module.exports = User;
