const express = require('express');
const router = express.Router();

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("user");

/* GET api listing. */
router.get('/', function(req, res){
  res.send('api works');
});

module.exports = router;
