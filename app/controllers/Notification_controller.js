var NotificationSchema=require('../models/notifications');

exports.notificationSubmit=function (req, res, next) {
    var user=req.session.user;
    console.log("===============>");
    const mybodydata = {
        sender_id:user._id,
        receiver_id:req.body._id,
        status:"Pending",
        message:req.body.message
    }
    var notification = NotificationSchema(mybodydata); 
    notification.save(function(err,products){
        if(err) res.send("Notification not sent");
      });
    res.send("Notification sent");
    
  }