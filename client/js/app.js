console.log('yop')
$('.dropdown-button').dropdown('open');
$('.carousel').carousel();
var photo= ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg']
var listesurgeles=["Traiteur","Plats Cuisinés","La Marée","Le Boucher","Volailles","Légumes","Pâtissier","Glacier","Fruits","Bio Surgelés"];
var listefrais=["Bio", "Epicerie", "Vin à la propriété"]
$('#surgeles').click(function(){
	$('#sous_cat').html("");
	console.log('yop')
	for (var i = 0; i < listesurgeles.length; i++) {
		$("#sous_cat").append('<li id="'+listesurgeles[i]+'">'+listesurgeles[i]+'</li>');
	}
})
stroll.bind('#test1');
$('#frais').click(function(){
	$('#sous_cat').html("");
	for (var i = 0; i < listefrais.length; i++) {
		$("#sous_cat").append('<li><a href="">'+listefrais[i]+'</a></li>');
	}
})

$("#sous_cat").delegate('li','click', function(){
	$("#test1").html("");
	$("#carou").html("");
	console.log('yop')
	for (var i = 0; i < photo.length; i++) {
	$("#test1").append('<li><img src="'+photo[i]+'"/></li>')		
	}
})
$("#logo").click(function(){
	index();
})
function index(){
	$("#test1").html("");
	for (var i = 0; i < photo.length; i++) {
	$("#carou").append('<div class="carousel-item"><img src="'+photo[i]+'"/></div>')		
	}	
}