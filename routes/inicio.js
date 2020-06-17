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
		res.render("./inicio/juguete",x);
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

module.exports = router;
