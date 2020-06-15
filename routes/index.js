var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Mazda=require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autos App' });
});

router.get('/mazda',function(req,res,next){
	var infoMazda={};
	infoMazda.pais="Japón";
	infoMazda.sectorVentas='comercial';
	infoMazda.anioFundacion=1929;
	infoMazda.logo="https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png";
	console.log(infoMazda);
	res.render('mazda',infoMazda);
});

router.get('/mercedesBenz',function(req,res,next){
	var infoMercedes={};
	infoMercedes.pais='Alemania';
	infoMercedes.sectorVentas='Automotriz';
	infoMercedes.anioFundacion=1883;
	infoMercedes.logo="https://www.mercedes-benz.com.mx/etc/designs/mb-nafta/images/Mercedes_Benz__logo--desktop.png";
	infoMercedes.image="https://www.mercedes-benz.com.mx/content/dam/mb-nafta/ca/vehicles/class-gt/bodystyle-rdstr/AMG%20GT-C/Class/AMG/1.%20Intro/MBCAN-2018-AMG-GT-C-ROADSTER-CATEGORY-HERO-1-1-DR.jpg";
	res.render('mercedesBenz',infoMercedes);
});

router.post('/alta',function(req,res,next){
	//crear un objeto mongo y hacer el insert
	var miMazda=Mazda({
		nombre:req.body.nombre,
		foto:req.body.foto
	});

	miMazda.save(function(err,data){
		if (err) {
			console.log('error');
		}else{
			res.render('resultadoAlta',data);
		}
	});
});

module.exports = router;
