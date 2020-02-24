var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scale1 = new Schema({
    name: String,
})
module.exports = mongoose.model('Firstscale', scale1);