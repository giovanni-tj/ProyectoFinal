var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Juguetes=Schema({
	nombre:String,
	material:String,
	tamanio:String,
	modelo:String,
	pilas:String,
	compania:String,
	foto:String,
	descripcion:String
});

module.exports=mongoose.model('Juguete',Juguetes);
