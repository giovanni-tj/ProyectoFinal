var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var AutoMazda=Schema({
	nombre:String,
	foto:String
});


module.exports=mongoose.model('Mazda',AutoMazda);