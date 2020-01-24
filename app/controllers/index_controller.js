
var profileSchema=require('../models/profile');

exports.enter = function(req, res, next){
	res.render('index');
};

exports.about = function(req, res, next){
	res.render("about-us");
};

exports.service = function(req, res, next){
	res.render("services");
};

exports.news = function(req, res, next){
	res.render("blog");
};


exports.contact = function(req, res, next){
	res.render("contact");
};

exports.elements = function(req, res, next){
	res.render("elements");
};

exports.indexicons = function(req, res, next){
	res.render("index-icons");
};

exports.finddonor = function(req, res, next){
	res.render("finddonor");
};
exports.findAlldonor =function (req, res, next) {
	profileSchema.find({},function (err,result) {
		  if(err) {
		console.log(err);
		throw err;
	  }
	  console.log(result);
	  result=result.filter(el=>{
		return el.user_id != req.session.user._id;
	  })
		  res.send(result);
	  });
}

// exports.logout = function(req, res, next){
// 	res.render("logout");
// };

exports.profile = function(req, res, next){
	res.render("profile");
};
exports.editProfile=function (req, res, next) {
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
            medicalissue: req.body.medicalissue,
            profession:req.body.profession,
            age:req.body.age,
            contactno:req.body.contactno
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
  }