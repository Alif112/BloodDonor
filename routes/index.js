var express = require('express');
var router = express.Router();


var Index = require('../app/controllers/index_controller');
//var Chat= require('../app/controllers/chat_controller');

router.get('/',Index.enter);

exports = module.exports =router;

