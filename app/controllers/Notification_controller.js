var NotificationSchema=require('../models/notifications');
var ProfileSchema=require('../models/profile');


// There is a problem with this function, receiver_id is not updating
exports.notificationSubmit=function (req, res, next) {
    var user=req.session.user;
    console.log("===============>");
    console.log(req.body.user_id);
    console.log(user._id);
    const mybodydata = {
        sender_id:user._id,
        receiver_id:req.body.user_id,     
        status:"Pending",
        message:req.body.message
    }
    var notification = NotificationSchema(mybodydata); 
    notification.save(function(err,products){
        if(err) res.send("Notification not sent");
      });

    res.send("Notification sent");
    
  }

exports.getReceivedUserNotification = function (req, res, next) {
    var user=req.session.user;
    NotificationSchema.find({receiver_id:user._id},function (err,result) {
        if(err) throw err;
        console.log(result);
        res.render('requestlist',{result:result});
    })

}

exports.getSentUserNotification = function (req, res, next) {
    var user=req.session.user;
    NotificationSchema.find({sender_id:user._id},function (err,result) {
        if(err) throw err;
        console.log(result);


        res.render('myrequest',{result:result});
    })
}

exports.notificationUpdate = function (req, res, next) {
    console.log(req.body);
    NotificationSchema.update({
        _id: req.body.id
    }, {
        $set: {
            status: req.body.status
        }
    }, function (err, doc) {
        if (err) {
            res.send("Notification not Updated");
        } else {
            res.send("Notification Updated");
        }
    })
}