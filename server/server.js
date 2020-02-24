var express = require('express');
var cors = require('cors');
var app = express(); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Admin = mongoose.mongo.Admin
var Patient = require('./model/patient');
var Pdiag = require('./model/pdiag');
var Diagnosis = require('./model/diagnosis');
var Scale1 = require('./model/scale1');
var Scale2 = require('./model/scale2');
var Scale3 = require('./model/scale3');
var Scale4 = require('./model/scale4');
var port = 3005;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ 
	extended: false
})
);
var db = '';
var mongoURI = 'mongodb://localhost/'+ db;
var connection = false;
try{
   
        mongoose.connect( mongoURI, {useUnifiedTopology: true,
        useNewUrlParser: true}). then(()=>{connection = true; console.log('db connection: ' + connection)} ).catch(err =>{connection = false ; console.log('connection: ' + connection + '' + err);} );
       
    
        
}catch(e){
    connection = false ; 
    console.log('connection: ' + connection + '' + e)
}

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
//database requests
  app.post('/db/switch', function (request, response) {
      db = request.body.dbName;
      mongoURI = 'mongodb://localhost/'+ db;
      mongoose.connect( mongoURI, {useUnifiedTopology: true,
        useNewUrlParser: true})
        .then(() =>{ 
            response.send(db);
        
            console.log('connected to ->' + mongoURI);
        })
        .catch(err => console.log(err));
        
  });
  app.get('/get/databases', function(request, response){
    if(connection === true){
        var db = mongoose.createConnection(mongoURI);
            db.on('open', function(){
                admin = new Admin(db.db).listDatabases(function(err, databases){
                    console.log('listDatabases succeeded');
                    var databaseNames = [];
                    var length = databases.databases.length;
                    for(var i=3; i <= (length-1); i++){
                        dbName = databases.databases[i].name
                        databaseNames.push(dbName); 
                    }
       
       response.send(databaseNames)

   })
  })

    }else{
        response.send(connection)
    }
    
  });
   

  app.get('/db/get', function (request, response) {
   if(connection === true){
    response.send({mongoURI})
   }else{
       response.send(connection)
   }
   
    
  });
//end of database requests//
//Getting Scales
  app.get('/get/scale1', function (request, response){
  
    Scale1.find({}, function(err, scales){
        if(err){
            response.status(500).send({error: 'Could not get scales'});
        }else{
            scales = {scales};
            response.send(scales);
            
        }
    });
  });
  app.get('/get/scale2', function (request, response){
    Scale2.find({}, function(err, scales){
        if(err){
            response.status(500).send({error: 'Could not get scales'});
        }else{
            response.send(scales);
        }
    });
  });
  app.get('/get/scale3', function (request, response){
    Scale3.find({}, function(err, scales){
        if(err){
            response.status(500).send({error: 'Could not get scales'});
        }else{
            response.send(scales);
        }
    });
  });
  app.get('/get/scale4', function (request, response){
    Scale4.find({}, function(err, scales){
        if(err){
            response.status(500).send({error: 'Could not get scales'});
        }else{
            response.send(scales);
        }
    });
  });


//Posting Scales
  app.post('/add/scale1', function (request, response) {
    var scales = new Scale1();
    scales.name = request.body.name;
    scales.save(function(err, savedScale){
        if(err){
            response.status(500).send({error: 'Could not send scale1'});
        }else{
            response.send(savedScale);
        }
    });


  });
  app.post('/add/scale2', function (request, response) {
    var scales = new Scale2();
    scales.scale2 = request.body.scale2;
    scales.save(function(err, savedScale){
        if(err){
            response.status(500).send({error: 'Could not send scale2'});
        }else{
            response.send(savedScale);
        }
    });


  });
  app.post('/add/scale3', function (request, response) {
    var scales = new Scale3();
    scales.scale3 = request.body.scale3;
    scales.save(function(err, savedScale){
        if(err){
            response.status(500).send({error: 'Could not send scale3'});
        }else{
            response.send(savedScale);
        }
    });


  });
  app.post('/add/scale4', function (request, response) {
    var scales = new Scale4();
    scales.scale4 = request.body.scale4;
    scales.save(function(err, savedScale){
        if(err){
            response.status(500).send({error: 'Could not send scale4'});
        }else{
            response.send(savedScale);
        }
    });


  });
//End of scales//
//Posting/getting Diagnosis//

app.get('/get/diagnosis', function(request, response){
    Diagnosis.find({},{ name: 1, _id: 0} , function(err, diag){
        if(err){
            response.status(500).send(err);

        }else{
            response.send(diag);
        }
    })
});

app.post('/add/diagnosis', function (request, response) {
    var diagnosis = new Diagnosis();
    diagnosis.name = request.body.name;
    diagnosis.save(function(err, savedDiag){
        if(err){
            response.status(500).send({error: 'Could not send Diagnosis'});
        }else{
            response.send(savedDiag);
        }
    });


  });


//End of Diagnosis//
//posting/getting patient record//
app.get('/get/patient', function (request, response) {
      
    
});

app.post('/register/patient', function (request, response){
    const today = new Date();
    const patientData = {
        name: request.body.name,
        age: request.body.age,
        gender: request.body.gender,
        doctorName: request.body.doctorName,
        bMri: request.body.bmri,
        diagnosis:{
            d1:request.body.diagnosis.d1,
            d2:request.body.diagnosis.d2
           
        },
        bScales: {
            scale1: {
                bsc1it1:request.body.bScales.scale1.bsc1it1,
                bsc1it2:request.body.bScales.scale1.bsc1it2,
                bsc1it3:request.body.bScales.scale1.bsc1it3,
                bsc1it4:request.body.bScales.scale1.bsc1it4,
                bsc1it5:request.body.bScales.scale1.bsc1it5,
                bsc1it6:request.body.bScales.scale1.bsc1it6,
                bsc1it7:request.body.bScales.scale1.bsc1it7,
                bsc1it8:request.body.bScales.scale1.bsc1it8,
                bsc1it9:request.body.bScales.scale1.bsc1it9,
                bsc1it10:request.body.bScales.scale1.bsc1it10,
                bsc1itt:request.body.bScales.scale1.bsc1itt
            },
            scale2: {
                bsc2it1:request.body.bScales.scale2.bsc2it1,
                bsc2it2:request.body.bScales.scale2.bsc2it2,
                bsc2it3:request.body.bScales.scale2.bsc2it3,
                bsc2it4:request.body.bScales.scale2.bsc2it4,
                bsc2it5:request.body.bScales.scale2.bsc2it5,
                bsc2it6:request.body.bScales.scale2.bsc2it6,
                bsc2it7:request.body.bScales.scale2.bsc2it7,
                bsc2it8:request.body.bScales.scale2.bsc2it8,
                bsc2it9:request.body.bScales.scale2.bsc2it9,
                bsc2it10:request.body.bScales.scale2.bsc2it10,
                bsc2itt:request.body.bScales.scale2.bsc2itt
            },
            scale3: {
                bsc3it1:request.body.bScales.scale3.bsc3it1,
                bsc3it2:request.body.bScales.scale3.bsc3it2,
                bsc3it3:request.body.bScales.scale3.bsc3it3,
                bsc3it4:request.body.bScales.scale3.bsc3it4,
                bsc3it5:request.body.bScales.scale3.bsc3it5,
                bsc3it6:request.body.bScales.scale3.bsc3it6,
                bsc3it7:request.body.bScales.scale3.bsc3it7,
                bsc3it8:request.body.bScales.scale3.bsc3it8,
                bsc3it9:request.body.bScales.scale3.bsc3it9,
                bsc3it10:request.body.bScales.scale3.bsc3it10,
                bsc3itt:request.body.bScales.scale3.bsc3itt
                
            },
            scale4: {
                bsc4it1:request.body.bScales.scale4.bsc4it1,
                bsc4it2:request.body.bScales.scale4.bsc4it2,
                bsc4it3:request.body.bScales.scale4.bsc4it3,
                bsc4it4:request.body.bScales.scale4.bsc4it4,
                bsc4it5:request.body.bScales.scale4.bsc4it5,
                bsc4it6:request.body.bScales.scale4.bsc4it6,
                bsc4it7:request.body.bScales.scale4.bsc4it7,
                bsc4it8:request.body.bScales.scale4.bsc4it8,
                bsc4it9:request.body.bScales.scale4.bsc4it9,
                bsc4it10:request.body.bScales.scale4.bsc4it10,
                bsc4itt:request.body.bScales.scale4.bsc4itt,
            }
        },
        aScales: {
            scale1: {
                asc1it1:'',
                asc1it2:'',
                asc1it3:'',
                asc1it4:'',
                asc1it5:'',
                asc1it6:'',
                asc1it7:'',
                asc1it8:'',
                asc1it9:'',
                asc1it10:'',
                asc1itt:''
            },
            scale2: {
                asc2it1:'',
                asc2it2:'',
                asc2it3:'',
                asc2it4:'',
                asc2it5:'',
                asc2it6:'',
                asc2it7:'',
                asc2it8:'',
                asc2it9:'',
                asc2it10:'',
                asc2itt:''
            },
            scale3: {
                asc3it1:'',
                asc3it2:'',
                asc3it3:'',
                asc3it4:'',
                asc3it5:'',
                asc3it6:'',
                asc3it7:'',
                asc3it8:'',
                asc3it9:'',
                asc3it10:'',
                asc3itt:''
                
            },
            scale4: {
                asc4it1:'',
                asc4it2:'',
                asc4it3:'',
                asc4it4:'',
                asc4it5:'',
                asc4it6:'',
                asc4it7:'',
                asc4it8:'',
                asc4it9:'',
                asc4it10:'',
                asc4itt:'',
            
        }
       
    }
}
    Patient.findOne({
        'name': request.body.name
    }).then((patient) =>{
        if(!patient){
            Patient.create(patientData)
            .then((patient) => {
                response.send({status: patient.name + ' Registered'})
            }).catch(err =>{
                response.send('error: ' + err)
            })
        } else{
            response.json({error: 'Patient Exists'})
        }
    }).catch(err =>{
        res.send('error: ' + err)
    })

});






//end of patient

  app.listen(port, function(){
    console.log('Server running on Port 3005');
    
  });