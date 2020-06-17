var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var assert = require('assert');

var url = 'mongodb://localhost:3000/test';

router.get('/juguete',function(req,res,next){
	/*var data={autos:[]};
	var auto={};
	auto.nombre="juguete 3";
	auto.foto="https://www.juguete.mx/siteassets/juguete-mx/mycos-2019/juguete-3-sedan/galeria/juguete-3-sedan-galeria-21.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="juguete 6";
	auto.foto="https://www.juguete.mx/siteassets/juguete-mx/mycos-2020/juguete6/galeria/juguete-6-galeria-11.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="juguete CX-3";
	auto.foto="https://www.juguete.mx/siteassets/juguete-mx/mycos-2019/juguete-cx-3/galeria/juguete-cx-3-2019-galeria-17.jpg";
	data.autos.push(auto);

	Juguete.find({},function(err,data){
		var x={Juguete:data};
		res.render("./galeria/juguete",x);
	});

	*/
	Juguete.find({},function(err,data){
		var x={juguetes:data};
		res.render("./galeria/juguete",x);
	});
});

router.get('/',function(req,res,next){
	Juguete.find( {} ,(err,datos)=>{
		res.status(200).json(datos);
	});
	});

	router.delete('/',(req,res,next)=>{
	res.status(405).json({mensaje:'Accion no permitida'})
	});

	router.delete('/:jugueteId',(req,res,next)=>{
	Juguete.findOneAndDelete({'_id':(req.params.jugueteId)},(err,datos)=>{
		if(err) res.status(404).json(err);
		else res.status(200).json(datos);
	});
	});

/*
function actualizar(nombre,material,tamanio,modelo,pilas,compania,foto,descripcion){
	Juguete.findOneAndUpdate({modelo:modelo},
{nombre:nombre,material:material,tamanio:tamanio,modelo,pilas,compania,foto,descripcion}
	)

}
*/



router.post('/update', function(req, res, next) {
  var item = {
    nombre: req.body.nombre,
		material: req.body.material,
		tamanio: req.body.tamanio,
		modelo: req.body.modelo,
		pilas: req.body.pilas,
    compania: req.body.compania,
		descripcion: req.body.descripcion,
    foto: req.body.foto
  };
  var id = req.body.id;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('juguetes').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
      assert.equal(null, err);
      console.log('Item updated');
      db.close();
    });
  });
});


/*
nombre:String,
material:String,
tamanio:String,
modelo:String,
pilas:String,
compania:String,
foto:String,
descripcion:String
*/
module.exports = router;
