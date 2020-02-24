var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scale4 = new Schema({
    scale4: String,
})
module.exports = mongoose.model('Fourthscale', scale4);