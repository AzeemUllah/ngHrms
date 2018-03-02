'use strict';
class User{

  constructor() {
    this.admin = require("firebase-admin");
    this.db = this.admin.database();
    this.userRef = this.db.ref("user");
    this.TAG = "Class: User "
  }

  createUser(email,firstname,lastname,password,phone,role,username) {
    this.userRef.push().set({
      "email": email,
      "firstname": firstname,
      "lastname": lastname,
      "password": password,
      "phone": phone,
      "role": role,
      "username": username
    }, function (error) {
      if (error) {
        console.log(this.TAG + "Function: createUser Error:" + error);
        return false
      } else {
        return true;
      }
    });
  }

  doesExsists(email){
    this.userRef.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        if(childSnapshot.child("email").val() == email);
          return true;
      });
      return false;
    });
  }



}
module.exports = User;
