'use strict';
class Login{
  constructor(){
    this.admin = require("firebase-admin");
    this.bcrypt = require('bcrypt');
    this.db = this.admin.database();
    this.userRef = this.db.ref("user");
    this.TAG = "Class: Login ";
    this.saltRounds = 10;
  }


  logIn(email,password,callback){
    var that = this;
    var counter = 0;
    var alreadySent = false;
    this.userRef.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        if(childSnapshot.child("email").val() == email ) {
          if(that.bcrypt.compareSync(password, childSnapshot.child("password").val())){
            alreadySent = true;
            //snapshot.key
            callback(childSnapshot.key);
          }
        }
        counter += 1;
        if(counter == snapshot.numChildren() && alreadySent == false){
          console.log("count " + counter + "alreadySent " + alreadySent);
          callback("");
        }
      });
    });
  }

}
module.exports = Login;
