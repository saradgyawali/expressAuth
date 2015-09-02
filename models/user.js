//Dependencies
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt');

// The user Schema
var UserSchema = new Schema({
  email: {type: String, required: true},
  passwordDigest: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

// define user model
var User = mongoose.model('User', UserSchema);
// export user model
module.exports = User;