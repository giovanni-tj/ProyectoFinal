var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var assert = require('assert');

var url = 'mongodb://localhost:3000/test';

router.get('/juguete',function(req,res,next){

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

	router.put('/:jugueteId',(req,res,next)=>{
	Juguete.findByIdAndUpdate({'_id':(req.params.jugueteId)},(err,productUpdate)=>{
		if(err) res.status(404).json(err);
		else res.status(200).json(productUpdate);
	});
	});

/*router.post('/update', function(req, res, next) {
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
*/
module.exports = router;
