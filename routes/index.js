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

router.get('/getdonardata',home.loggedIn,function (req, res, next) {
  profileSchema.find({},function (err,result) {
		if(err) {
      console.log(err);
      throw err;
    }
		console.log(result);
		res.send(result);
	});
})

router.get('/profile',home.loggedIn, Index.profile);
router.post('/profile', home.loggedIn, function (req, res, next) {
    console.log(req.body);
    var user=req.session.user;
    console.log("===============>");
    console.log(user);


    // profileSchema.find({
    //   user_id:user._id;
    // },
    // function(err, results) {
    //   if (err) throw err;
    //   if (results.toString() === '') {


    //     res.redirect('/profile');
    //   }
    //   console.log(results);
    //   res.render('home', {
        
    //   });
    // });

    var query = {
    'user_id': user._id
  };
  
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
    profileSchema.findOneAndUpdate(query,{
      $set:{
            user_id:user._id,
            fullname: req.body.fullname,
            address: req.body.address,
            district: req.body.district,
            country: req.body.country,
            bloodgroup: req.body.bloodgroup,
            lastgiven: req.body.lastgiven,
            medicalissue: req.body.medicalissue
      }
    },{
      new: true,
      upsert: true

    },function (err,doc) {
      if (err) {
       res.render('profile',{message: 'User registered not successfully!'});
      } else {
       res.render('profile',{message: 'User registered successfully!'});
      }
    })
  });




router.get('/finddonor',home.loggedIn,Index.finddonor);

exports = module.exports =router;

