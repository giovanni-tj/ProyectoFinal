var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juguetes' });
});

/*router.get('/juguete',function(req,res,next){
	var infojuguete={};
	infojuguete.pais="Japón";
	infojuguete.sectorVentas='comercial';
	infojuguete.anioFundacion=1929;
	infojuguete.logo="https://www.juguete.mx/siteassets/juguete-mx/logos-new-juguete/juguete-logo-desktop-2.png";
	console.log(infojuguete);
	res.render('juguete',infojuguete);
});

router.get('/mercedesBenz',function(req,res,next){
	var infoMercedes={};
	infoMercedes.pais='Alemania';
	infoMercedes.sectorVentas='Automotriz';
	infoMercedes.anioFundacion=1883;
	infoMercedes.logo="https://www.mercedes-benz.com.mx/etc/designs/mb-nafta/images/Mercedes_Benz__logo--desktop.png";
	infoMercedes.image="https://www.mercedes-benz.com.mx/content/dam/mb-nafta/ca/vehicles/class-gt/bodystyle-rdstr/AMG%20GT-C/Class/AMG/1.%20Intro/MBCAN-2018-AMG-GT-C-ROADSTER-CATEGORY-HERO-1-1-DR.jpg";
	res.render('mercedesBenz',infoMercedes);
});*/

router.post('/alta',function(req,res,next){
	//crear un objeto mongo y hacer el insert
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
