var express = require('express');
var router = express.Router();
//  var home = require('../app/controllers/home');
//  var profile = require('../app/controllers/profileController');
//  var profileModel = require('../routes/profile');

// //List Table Data
// router.get('/display', function(req, res) {
//     profileModel.find(function(err, profile) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render('display-table', { profile: profile });
//         console.log(profile);
//       }
//   }); 
//   });
  
  
//   //Display Form 
//   router.get('/add', function (req, res, next) {
//     res.render('add-form');
//   });
  
  
//   /* POST Data. */
//   router.post('/add', function (req, res, next) {
//     console.log(req.body);
  
//     const mybodydata = {
//       fullname: req.fullname,
//       address: req.body.address,
//       district: req.body.district,
//       country: req.body.country,
//       bloodgroup: req.body.bloodgroup,
//       lastgiven: req.body.lastgiven,
//       medicalissue: req.body.medicalissue

//     }
//     var data = profileModel(mybodydata); 
//     //var data = profileModel(req.body);
//     data.save(function (err) {
//       if (err) {
      
//        res.render('add-form',{message: 'User registered not successfully!'});
//       } else {
        
//        res.render('add-form',{message: 'User registered successfully!'});
//       }
//     })
//   });
  
//    /* DELETE User BY ID */
//    router.get('/delete/:id', function(req, res) {
//     profileModel.findByIdAndRemove(req.params.id, function (err, project) {
//       if (err) {
      
//       req.flash('error_msg', 'Record Not Deleted');
//       res.redirect('../display');
//       } else {
        
//         req.flash('success_msg', 'Record Deleted');
//         res.redirect('../display');
//       }
//     });
//   });
  
  
//    /* GET SINGLE User BY ID */
//   router.get('/edit/:id', function(req, res) {
//     console.log(req.params.id);
//     UsersModel.findById(req.params.id, function (err, user) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(profile);
         
//         res.render('edit-form', {profileDetail: profile });
//       }
//     });
//   });
   
//   /* UPDATE User */
//   router.post('/edit/:id', function(req, res) {
//     profileModel.findByIdAndUpdate(req.params.id, req.body, function (err) {
//       if(err){
//         req.flash('error_msg', 'Something went wrong! User could not updated.');
//         res.redirect('edit/'+req.params.id);
//     } else {
//       req.flash('success_msg', 'Record Updated');
//       res.redirect('../display');
//     }
//     });
//   });
  
  



 exports = module.exports =router;