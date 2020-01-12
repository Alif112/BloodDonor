var mongoose = require('mongoose');

//define the schema for our user model
var profileSchema = mongoose.Schema({
    // _id:{ type: Number, default: 1 },
    user_id:String,
    fullname:String,
    address: String,
    district: String,
    country: String,
    bloodgroup:String,
    lastgiven:String,
    medicalissue:String
});
module.exports = mongoose.model('user_profile', profileSchema);


