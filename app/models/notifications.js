var mongoose = require('mongoose');

//define the schema for our user model
var notificationSchema = mongoose.Schema({

    sender_id:String,
    receiver_id:String,
    status:String,
    message:String
    
});
module.exports = mongoose.model('notification', notificationSchema);


