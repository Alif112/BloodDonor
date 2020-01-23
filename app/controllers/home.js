var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

exports.loggedIn = function (req, res, next) {
  if (req.session.user) { // req.session.passport._id
    next();

  } else {

    res.redirect('/login');

  }

}

exports.logOut = function (req, res, next) {
  console.log('logout --------mama ');
  if (req.session.user) {


    req.logout();
    req.flash('success_msg', 'You are logged out');
    req.session.destroy();
    res.redirect('/login');
  } else {
    next();
  }

}


var Profile = require("../models/profile")

exports.home = function (req, res) {
  var name = req.user.name;
  var email = req.user.mail;
  Profile.findOne({
    user_id: req.session.user._id
  }, function (err, result) {
    if (err) throw err;
    console.log("==================================");
    console.log(result);
    if (result == null) {
      res.render("home", {
        error: req.flash("error"),
        success: req.flash("success"),
        session: req.session,
        result:{},
        user: name,
        email: email
      });

    } else {
      res.render("home", {
        error: req.flash("error"),
        success: req.flash("success"),
        result: result,
        session: req.session,
        user: name,
        email: email
      });
    }
  });

}

exports.profileData = function (req, res) {
  console.log(req.params.id);
  // res.send(req.params.id);
  var name = req.user.name;
  var email = req.user.mail;
  Profile.findOne({
    user_id: req.params.id
  }, function (err, result) {
    if (err) throw err;
    console.log("==================================");
    console.log(result);
    if (result == null) {
      res.render("home", {
        error: req.flash("error"),
        success: req.flash("success"),
        session: req.session,
        result:{},
        user: name,
        email: email
      });

    } else {
      res.render("home", {
        error: req.flash("error"),
        success: req.flash("success"),
        result: result,
        session: req.session,
        user: name,
        email: email
      });
    }
  });
}

exports.signup = function (req, res) {

  if (req.session.user) {

    res.redirect('/home');

  } else {

    res.render('signup', {
      error: req.flash("error"),
      success: req.flash("success"),
      session: req.session
    });
  }

}


exports.login = function (req, res) {

  if (req.session.user) {

    res.redirect('/home');

  } else {

    res.render('login', {
      error: req.flash("error"),
      success: req.flash("success"),
      session: req.session
    });

  }

}