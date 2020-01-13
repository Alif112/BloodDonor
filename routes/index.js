var express = require('express');
var router = express.Router();
var home = require('../app/controllers/home');


var Index = require('../app/controllers/index_controller');
//var Chat= require('../app/controllers/chat_controller');
var profileSchema=require('../app/models/profile');

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
router.post('/profile', home.loggedIn, function (req, res, next) {
    console.log(req.body);
    var user=req.session.user;
    console.log(user);

  
    const mybodydata = {
            user_id:user._id,
            fullname: req.body.fullname,
            address: req.body.address,
            district: req.body.district,
            country: req.body.country,
            bloodgroup: req.body.bloodgroup,
            lastgiven: req.body.lastgiven,
            medicalissue: req.body.medicalissue

    }
    var data = profileSchema(mybodydata); 
    //var data = UsersModel(req.body);
    data.updateOne(mybodydata,function (err) {
      if (err) {
       res.render('profile',{message: 'User registered not successfully!'});
      } else {
       res.render('profile',{message: 'User registered successfully!'});
      }
    })
  });




router.get('/finddonor',Index.finddonor);

exports = module.exports =router;

