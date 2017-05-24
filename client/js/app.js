$('.dropdown-button').dropdown('open');
$('.carousel').carousel();

var listesurgeles=["Traiteur","Plats Cuisinés","La Marée","Le Boucher","Volailles","Légumes","Pâtissier","Glacier","Fruits","Bio Surgelés"];
var listefrais=["Bio", "Epicerie", "Vin à la propriété"]
$('#surgeles').click(function(){
	$('#sous_cat').html("");
	for (var i = 0; i < listesurgeles.length; i++) {
		$("#sous_cat").append('<li><a href="">'+listesurgeles[i]+'</a></li>');
	}
})

$('#frais').click(function(){
	$('#sous_cat').html("");
	for (var i = 0; i < listefrais.length; i++) {
		$("#sous_cat").append('<li><a href="">'+listefrais[i]+'</a></li>');
	}
})