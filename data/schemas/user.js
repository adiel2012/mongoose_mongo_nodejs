var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
   username: String,
   name: String,
   password: String
});
module.exports = userSchema;