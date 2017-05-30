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
      var traiteur;
      var plats;
      var maree;
      var boucher;
      var volailles;
      var legumes;
      var patissier;
      var glacier;
      var fruits;
      var sbio;
      var bio;
      var epicerie;
      var vin;

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
      function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1yAOfAtVGLUSO454B_CDMPX5qpQLs7K5D-FI6IJbMm8s',
          range: 'test2',
        }).then(function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            for (i = 1; i < 41; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              traiteur.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 41; i < 82; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              plats.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }for (i = 82; i < 123; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              maree.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 123; i < 164; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              boucher.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 164; i < 205; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              volailles.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 205; i < 246; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              legumes.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 246; i < 287; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              patissier.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 287; i < 328; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              glacier.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 328; i < 369; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              fruits.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 369; i < 410; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              sbio.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 410; i < 451; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              bio.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 451; i < 492; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              epicerie.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }
            for (i = 492; i < 522; i++) {
              var row = range.values[i];
              var produits1 = {"ref":row[0],"nom":row[1],"description":row[2],"prix":[3],"photo":row[0]};
              vin.push(produits1)
                // Print columns A and E, which correspond to indices 0 and 4.
              // appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] );
            }

          } else {
            appendPre('No data found.');
          }
        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        });
      }


$('.dropdown-button').dropdown('open');
$('.carousel').carousel();
var photo= ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
var listesurgeles=["Traiteur","Plats Cuisinés","La Marée","Le Boucher","Volailles","Légumes","Pâtissier","Glacier","Fruits","Bio Surgelés"];
var listefrais=["Bio", "Epicerie", "Vin à la propriété"]

      function news(){
stroll.bind('#view');
        $("#sous_cat").html("");
        $("#view").html("");
        var ligne = '<ul id="products" class="grow">'
        $("#view").append(ligne)
        for (var i = 0; i < photo.length; i++) {
  $("#products").append('<li class="carousel-item" ><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="'+photo[i]+'"/></div><div class="card-content"><h3 class="card-title activator grey-text text-darken-4">Nom du produit</h3><h6 class="right">Ref</h6></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">Nom du produit</h3><h6 class="right">Prix</h6><p>Description</p></div></div></li>')
        }
      }
news();
$('#surgeles').click(function(){

  $('#sous_cat').html("");
  for (var i = 0; i < listesurgeles.length; i++) {
    $("#sous_cat").append('<li id="'+listesurgeles[i]+'">'+listesurgeles[i]+'</li>');
  }

})
$('#frais').click(function(){
	$('#sous_cat').html("");
	for (var i = 0; i < listefrais.length; i++) {
		$("#sous_cat").append('<li><a href="">'+listefrais[i]+'</a></li>');
	}
})
$("#sous_cat").delegate('li','click', function(){
  console.log(traiteur)
  $("#view").html("");
  $("#sous_cat").html("");
  var ligne= '<ul id="products" class="grow">'
  $("#view").append(ligne)
  for (var i = 0; i < photo.length; i++) {
  $("#products").append('<li><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="'+photo[i]+'"/></div><div class="card-content"><h3 class="card-title activator grey-text text-darken-4">Nom du produit</h3><h6 class="right">Ref</h6></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">Nom du produit</h3><h6 class="right">Prix</h6><p>Description</p></div></div></li>')
  }
})

