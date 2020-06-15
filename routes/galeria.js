var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Mazda=require('../models/autos');


router.get('/mazda',function(req,res,next){
	/*var data={autos:[]};
	var auto={};
	auto.nombre="Mazda 3";
	auto.foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2019/mazda-3-sedan/galeria/mazda-3-sedan-galeria-21.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2020/mazda6/galeria/mazda-6-galeria-11.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2019/mazda-cx-3/galeria/mazda-cx-3-2019-galeria-17.jpg";
	data.autos.push(auto);*/
	Mazda.find({},function(err,data){
		var x={autos:data};
		res.render("./galeria/mazda",x);
	});



	
});

module.exports = router;