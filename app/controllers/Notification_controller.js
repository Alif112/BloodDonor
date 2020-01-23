var NotificationSchema=require('../models/notifications');

exports.notificationSubmit=function (req, res, next) {
    var user=req.session.user;
    console.log("===============>");
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
        res.send(result);
    })

}

exports.getSentUserNotification = function (req, res, next) {
    var user=req.session.user;
    NotificationSchema.find({sender_id:user._id},function (err,result) {
        if(err) throw err;
        res.send(result);
    })
}