if ('serviceWorker' in navigator) {
  // J'enregistre mon service worker sw.js
  // avec comme scope '/' (racine);
  navigator.serviceWorker.register('sw.js', { scope: '/projet_delice/'})
  // Si c'est good..
  .then(function(reg){
    console.log('Registration succeeded. Scope is ' + reg.scope);
  })
  // Si c'est bad..
  .catch(function(error){
    console.log('Registration failed with' + error);
  });
}
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '397522859395-84g22kehn30179u64c02ev5ln4haqbid.apps.googleusercontent.com';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
       function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
       function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
       function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listMajors();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
       function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
       function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
       function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
       var allProducts={};
       var traiteur=[];
       var plats=[];
       var maree=[];
       var boucher=[];
       var volailles=[];
       var legumes=[];
       var patissier=[];
       var glacier=[];
       var fruits=[];
       var bio=[];
       var frais=[];
       function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1yAOfAtVGLUSO454B_CDMPX5qpQLs7K5D-FI6IJbMm8s',
          range: 'test2',
        }).then(function(response) {
          var product={};
          var range = response.result;
          if (range.values.length > 0) {
            for (i = 1; i < range.values.length; i++) {
              var row = range.values[i];
              if(row[3] === "traiteur"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              traiteur.push(product)
              }else if(row[3] === "plats cuisines"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              plats.push(product)              
              }else if(row[3] === "La marée"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              maree.push(product)              
              }else if(row[3] === "légumes"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              legumes.push(product)              
              }else if(row[3] === "boucher"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              boucher.push(product)
              }else if(row[3] === "volailles"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              volailles.push(product)
              }else if(row[3] === "patissier"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              patissier.push(product)            
              }else if(row[3] === "glacier"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              glacier.push(product)              
              }else if(row[3] === "Produits frais"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              frais.push(product)              
              }else if(row[3] === null && row[2] === "1"){
                product={
                  "scat": row[4],
                  "ref": row[0],
                  "nom": row[1],
                  "unitv": row[5],
                  "punit": row[6],
                  "pttc": row[7],
                  "promo": row[9],
                  "ppromo": row[10],
                  "desc": row[11],
                  "photo": row[12]
                }
              bio.push(product)                      
              }
              allProducts={
                "traiteur":traiteur,
                "plats":plats,
                "maree":maree,
                "boucher": boucher,
                "volailles":volailles,
                "legumes":legumes
                "patissier": patissier,
                "glacier": glacier,
                "bio": bio,
                "frais": frais
              }
            }else {
              appendPre('No data found.');
            }
          }, function(response) {
            appendPre('Error: ' + response.result.error.message);
          }
          });
};
$('.carousel').carousel();
var photo= ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
var listesurgeles=["Traiteur","Plats Cuisinés","La Marée","Le Boucher","Volailles","Légumes","Pâtissier","Glacier","Fruits","Bio Surgelés"];
var listefrais=["Bio", "Epicerie", "Vin à la propriété"]

news();
function news(){
  $("#view").html("");
  for (var i = 0; i < allProducts.length; i++) {
    console.log(i)
    $('#'+i+'').append('<div id="'+allProducts[i]+'">'+allProducts[i]+'</div>')
  }
}
$("#view").delegate('p','click', function(){
  var categorie = $(this).attr("id");
  generer(categorie);
})


function generer(array){

  $("#view").html("");
  $("#sous_cat").html("");
  var ligne= '<ul id="products" class="grow">'
  $("#view").append(ligne)
  for (var i = 0; i < allProducts[array].length; i++) {  
    var insert= allProducts[array][i];
    $("#products").append('<li><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="'+insert.photo+'"/></div><div class="card-content"><h3 class="card-title activator grey-text text-darken-4">"'+insert.nom+'"</h3><h6 class="right">"'+insert.ref+'"</h6></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">"'+insert.nom+'"</h3><h6 class="right">"'+insert.pttc+'"</h6><p>"'+insert.desc+'"</p></div></div></li>')
  }
}
// à ajouter sous-cat(scat), unité de vente (unitv), prix unitaire (punit), promo (promo) et prix(ppromo)
 