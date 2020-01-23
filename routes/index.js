var express = require('express');
var router = express.Router();
var home = require('../app/controllers/home');


var Index = require('../app/controllers/index_controller');
//var Chat= require('../app/controllers/chat_controller');

router.get('/',Index.enter);
router.get('/index',Index.enter);

router.get('/about',Index.about);


router.get('/service',Index.service);


router.get('/news',Index.news);



router.get('/contact',Index.contact);


router.get('/elements',Index.elements);


router.get('/indexicons',Index.indexicons);


// router.get('/logout',home.loggedIn,Index.logout);


router.get('/profile',home.loggedIn, Index.profile);
router.get('/profile/:id',home.loggedIn, home.profileData);
router.post('/profile', home.loggedIn, Index.editProfile);




router.get('/finddonor',home.loggedIn,Index.finddonor);
router.get('/getdonardata',home.loggedIn,Index.findAlldonor);
exports = module.exports =router;

