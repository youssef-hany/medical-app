var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patient = new Schema({
    name: String,
    age: Number,
    gender: String,
    dateOfEntry: {type: Date, default: Date.now()},
    dateOfDep: {type: Date, default: ''},
    diagnosis: {
        d1:String,
        d2:String
      
    },
    doctorName: String,
    bMri: String,
    aMri: String,

    bScales: [{
        scale1:{
            bsc1it1: Number,
            bsc1it2: Number,
            bsc1it3: Number,
            bsc1it4: Number,
            bsc1it5: Number,
            bsc1it6: Number,
            bsc1it7: Number,
            bsc1it8: Number,
            bsc1it9: Number,
            bsc1it10: Number,
            bsc1itt: Number
        },
        scale2:{
            bsc2it1: Number,
            bsc2it2: Number,
            bsc2it3: Number,
            bsc2it4: Number,
            bsc2it5: Number,
            bsc2it6: Number,
            bsc2it7: Number,
            bsc2it8: Number,
            bsc2it9: Number,
            bsc2it10: Number,
            bsc2itt: Number
        },
        scale3:{
            bsc3it1: Number,
            bsc3it2: Number,
            bsc3it3: Number,
            bsc3it4: Number,
            bsc3it5: Number,
            bsc3it6: Number,
            bsc3it7: Number,
            bsc3it8: Number,
            bsc3it9: Number,
            bsc3it10: Number,
            bsc3itt: Number
        },
        scale4:{
            bsc4it1: Number,
            bsc4it2: Number,
            bsc4it3: Number,
            bsc4it4: Number,
            bsc4it5: Number,
            bsc4it6: Number,
            bsc4it7: Number,
            bsc4it8: Number,
            bsc4it9: Number,
            bsc4it10: Number,
            bsc4itt: Number
        }
    }],

    aScales: [{
        scale1:{
            asc1it1: Number,
            asc1it2: Number,
            asc1it3: Number,
            asc1it4: Number,
            asc1it5: Number,
            asc1it6: Number,
            asc1it7: Number,
            asc1it8: Number,
            asc1it9: Number,
            asc1it10: Number,
            asc1itt: Number
        },
        scale2:{
            asc2it1: Number,
            asc2it2: Number,
            asc2it3: Number,
            asc2it4: Number,
            asc2it5: Number,
            asc2it6: Number,
            asc2it7: Number,
            asc2it8: Number,
            asc2it9: Number,
            asc2it10: Number,
            asc2itt: Number
        },
        scale3:{
            asc3it1: Number,
            asc3it2: Number,
            asc3it3: Number,
            asc3it4: Number,
            asc3it5: Number,
            asc3it6: Number,
            asc3it7: Number,
            asc3it8: Number,
            asc3it9: Number,
            asc3it10: Number,
            asc3itt: Number
        },
        scale4:{
            asc4it1: Number,
            asc4it2: Number,
            asc4it3: Number,
            asc4it4: Number,
            asc4it5: Number,
            asc4it6: Number,
            asc4it7: Number,
            asc4it8: Number,
            asc4it9: Number,
            asc4it10: Number,
            asc4itt: Number
        }
    }],
});

module.exports = mongoose.model('Patient', patient);