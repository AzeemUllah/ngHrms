const express = require('express');
const router = express.Router();

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();
var userRef = db.ref("user");

var userCls = require('./class/User');
var std = new userCls();


/* GET api listing. */
router.get('/create-user', function(req, res){
  res.send(std.doesExsists("theazeemullah@gmail.com"));
});

module.exports = router;
