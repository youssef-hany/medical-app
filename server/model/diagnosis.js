var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagnose = new Schema({
    name: String,
})

module.exports = mongoose.model('Diagnose', diagnose);