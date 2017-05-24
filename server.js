var express= require('express');
var bodyParser= require('body-parser');
var validator= require('validator');
var excel= require('excel');
var fs= require('fs');
var id = require("uuid/v4");

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
function check(string){
	return string.replace("-"," ").split(" ").join(" ");
}
function verificationProduct(product){
	var error={};
	if(validator.isEmpty(check(product.name))){
		error.name= "Champ Obligatoire";
	}
	if(validator.isEmpty(check(product.description))){
		error.description= "Champ Obligatoire";
	}
	if(validator.isEmpty(product.price)){
		error.price= "Champ Obligatoire";
	}
	if(!validator.isAlpha(check(product.name))){
		error.name= "Caractère non valide";
	}
	if(!validator.isLength(check(product.description, {max: 150}))){
		error.description= "Le nombre de Caractère est limité a 150"
	}

	return error;		
}

app.post('/admin/product', function(req, res){
	product= req.body
	verificationProduct(product)
})