var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scale2 = new Schema({
    scale2: String,
})
module.exports = mongoose.model('Secondscale', scale2);