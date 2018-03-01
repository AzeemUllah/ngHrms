const express = require('express');
const router = express.Router();

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("au-hrms");

/* GET api listing. */
router.get('/', function(req, res){
  ref.set({
    alanisawesome: {
      date_of_birth: "June 23, 1912",
      full_name: "Alan Turing"
    },
    gracehop: {
      date_of_birth: "December 9, 1906",
      full_name: "Grace Hopper"
    }
  });

  res.send('api works');
});

module.exports = router;
