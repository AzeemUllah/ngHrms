const express = require('express');
const router = express.Router();

// Import Admin SDK
var admin = require("firebase-admin");
var passport = require('passport');

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("user");

/* GET api listing. */
router.post('/', function(req, res, next) {
    passport.authenticate('local',
      function (data, uid, error){
        console.log("faliure " + data + " " + uid + " " + error + " ");
        res.send(req.user);
      })(req, res, next);
}
);

module.exports = router;
