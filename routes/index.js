var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juguetes' });
});

/*router.get('/mazda',function(req,res,next){
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


router.delete('/jugueteId',(req,res,next)=>{

Juguete.findOneAndDelete({
  '_id':(req.params._id)},(err,datos)=>{
  if(err) res.status(404).json(err);
  else res.status(200).json(datos);
});

});

module.exports = router;
