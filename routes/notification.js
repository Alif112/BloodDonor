var express = require('express');
var router = express.Router();
var home = require('../app/controllers/home');

var NotificationController = require('../app/controllers/Notification_controller');
router.post('/createNotification',home.loggedIn,NotificationController.notificationSubmit);

router.get('/getReceivedNotifications',home.loggedIn,NotificationController.getReceivedUserNotification);
router.get('/getSentNotifications',home.loggedIn,NotificationController.getSentUserNotification);


exports = module.exports =router;
