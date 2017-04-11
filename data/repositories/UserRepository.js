var User = require('../../data/models/user');
function UserRepository() {
	  

	  this.save = function(user,callback){
		  user.save(function (err) {
             callback(err);               
         });		  
	  }
	  
	   this.getByUserName = function(ausername,callback){
		  User.find({username:ausername}, function(err, user) {	      
		     callback(err, user);
          });
	  }
	  
	  this.remove = function(ausername,callback){		  
		  User.remove({ username: ausername }, callback);		  
	  }
	  
	  this.edit = function(ausername,user,callback){		  
		  User.update({username:ausername},  { name: user.name, username : user.username, password : user.password  }, { multi: true }, callback);		  
	  }
	  
	  
	 this.list = function(callback){
		  User.find( function(err, user) {	      
		  callback(err, user);
      });		 
	 }
	
	 
}
module.exports =  UserRepository;