var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juguetes' });
});

router.post('/alta',function(req,res,next){
	var mjuguete=Juguete({
		nombre:req.body.nombre,
    material:req.body.material,
    tamanio:req.body.tamanio,
    modelo:req.body.modelo,
    pilas:req.body.pilas,
    compania:req.body.compania,
		foto:req.body.foto,
    descripcion:req.body.descripcion
	});

	mjuguete.save(function(err,data){
		if (err) {
			console.log('error');
		}else{
			res.render('resultadoAlta',data);
		}
	});
});


module.exports = router;
