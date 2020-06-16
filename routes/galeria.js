var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');


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

module.exports = router;
