var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var userCls = require('./../class/User');
var loginCls = require('./../class/Login');
var validationsCls = require('./../class/Validations');

var user = new userCls();
var login = new loginCls();
var validations = new validationsCls();

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
  function(req, username, password, done) {
    var callbackHell = false;

    login.logIn(username,password,function (data) {
      if(data == ""){
        return done(null, false, { message: 'Incorrect Password.' });
      }
      else{

          req.login({uid: data}, function () {
            if (!callbackHell) {
              callbackHell = true;
              req.logout();
              console.log("a\n");
              return done(null, true, {message: 'Login sucessful.', uid: data});
            }
          });
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.uid);
});

passport.deserializeUser(function(user, done) {
  done(null, user.uid);
});

module.exports = passport;
