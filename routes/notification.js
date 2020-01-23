var express = require('express');
var router = express.Router();
var home = require('../app/controllers/home');

var NotificationController = require('../app/controllers/Notification_controller');
router.post('/createdata',home.loggedIn,NotificationController.notificationSubmit);


exports = module.exports =router;
