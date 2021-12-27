var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = Schema ({
  username: { type: String, required: true},
  password: { type: String, required: true},
});

LoginSchema
.virtual('url')
.get(function (){
  return '/login/' + this._id;
});

module.exports = mongoose.model('Login', LoginSchema)
