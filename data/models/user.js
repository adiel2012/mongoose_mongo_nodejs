var mongoose = require('mongoose');
var userSchema = require('../schemas/user');
var User = mongoose.model('user', userSchema);
//console.log(User);
module.exports = User;