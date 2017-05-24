var express= require('express');
var bodyParser= require('body-parser');
var validator= require('validator');
var excel= require('excel');
var fs= require('fs');
var id = require("uuid/v4");
var isEmpty = require('lodash/isEmpty');
var saltRounds = 10;

var app = express();
app.listen(3000);
app.use(express.static(__dirname+'client'));
app.use(bodyParser.urlencoded({entended: false}));
// Variable global
var catalogue;
var product;
// function
function readCatalogue() {
	fs.readFile("....json", function(err, data){
		if(err) throw err;
		catalogue= JSON.parse(data);
	})	
}
function writeCatalogue(product, res){
	fs.readFile("....json", function(err, data){
		if(err) throw err;
		catalogue= JSON.parse(data);
		catalogue.push(product)
		var json= JSON.stringify(catalogue)
		fs.writeFile(".....json", json, function(err){
			if(err){
				res.send('Error'+err);
			}
				res.send('Save completly');
		})
	})	
}
