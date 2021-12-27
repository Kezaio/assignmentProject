var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = Schema ({
  // id:{type: Schema.ObjectId,},
  username: { type: String, required: true},
  password: { type: String, required: true},
});

user
.virtual('url')
.get(function (){
  return '/register/' + this._id;
});

module.exports = mongoose.model('users', user)
