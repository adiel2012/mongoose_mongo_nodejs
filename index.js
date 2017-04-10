//https://codeforgeek.com/2015/08/restful-api-node-mongodb/



var dbURL = 'mongodb://localhost/db1';
var db = require('mongoose').connect(dbURL);


var User = require('./data/models/user');
//var notLoggedIn = require('./middlewares/not_logged_in');
var aUserRepository = require('./routes/middlewares/UserRepository');

var m_UserRepository = new aUserRepository();
/*var auser = new User({username: 'username77',        name: 'caca',       password: 'miclave3'    });
m_UserRepository.save(auser,function(err){
	if(!err){
		console.log(err);
	}else{
		console.log("Insertado correctamente");		
	}	
});*/

/*
m_UserRepository.getByUserName("username56",function(err, user){
	if(!err){
		console.log(user);
	}else{
		console.log(err);
	}	
});
*/
/*
m_UserRepository.remove("username77",function(err) {
            if (!err) {
               console.log( 'notification!');
            }
            else {
               console.log( 'error');
           }
      });*/
	  
var auser = new User({username: 'username134',        name: 'caca345',       password: 'miclave345'    });
m_UserRepository.edit('username56',auser,function callback (err, numAffected) {
  // numAffected is the number of updated documents
            if (!err) {
               console.log( 'notification!'+numAffected);
            }
            else {
               console.log( err);
           }
});  
	  

/*
m_UserRepository.list(function(err, user){
	console.log(user);
	console.log(err);	
});*/


//console.log(loadUser);
console.log("aa");