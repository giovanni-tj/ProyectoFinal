var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

router.delete('/jugueteId',(req,res,next)=>{

Juguete.findOneAndDelete({
  '_id':(req.params._id)},(err,datos)=>{
  if(err) res.status(404).json(err);
  else res.status(200).json(datos);
});

});

module.exports = router;
