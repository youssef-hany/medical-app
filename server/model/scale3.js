var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scale3 = new Schema({
    scale3: String,
})
module.exports = mongoose.model('Thirdscale', scale3);