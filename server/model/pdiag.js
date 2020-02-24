var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var pdiagnosis = new Schema({
    _pid: {type:ObjectId},
    diag1: String,
    diag2: String,
    diag3: String,
    diag4: String,
    diag5: String,
    diag6: String,
    diag7: String,
    diag8: String,
    diag9: String,
    diag10: String,
    diag11: String,
    diag12: String,
    diag13: String,
    diag14: String,
    diag15: String,
    diag16: String,
    diag17: String,
    diag18: String,
    diag19: String,
    diag20: String

});
