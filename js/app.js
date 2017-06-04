
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


      var allProducts={};

      var photo= {"traiteur": "images/corolles-aperitif.jpg",
      "plats cuisines": "images/langue-de-boeuf-piquante.jpg",
      "La marée": "images/truites-arc-en-ciel.jpg",
      "boucher": "images/steaks-hache-max.jpg",
      "volailles": "images/pintade-fermiere.jpg",
      "légumes": "images/julienne-legumes.jpg",
      "patissier": "images/coeur-fondant-au-chocolat.jpg",
      "glacier": "images/domes-praline-facon-rocher.jpg",
      "bio": "images/haricots-bio-mange.jpg",
      "Produits frais": "images/cafe-grains-pur-arabica.jpg"
    };

    function listMajors() {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1yAOfAtVGLUSO454B_CDMPX5qpQLs7K5D-FI6IJbMm8s',
        range: 'test',
      }).then(function(response) {
        var product={};
        var range = response.result;
        if (range.values.length > 0) {
          for (i = 1; i < range.values.length; i++) {
            var row = range.values[i];
            if(row[3]===''){
              continue;
            }
            if(allProducts[row[3]]===undefined){
              allProducts[row[3]] = [];
            }
            allProducts[row[3]].push({
              "scat": row[4],
              "ref": row[0],
              "nom": row[1],
              "unitv": row[5],
              "punit": row[6],
              "pttc": row[7],
              "promo": row[9],
              "ppromo": row[10],
              "desc": row[11],
              "photo": row[12]});
          }
          news();
          stockage();
        }else {
          load();
        }
      }, 

      function(response) {
        appendPre('Error: ' + response.result.error.message);
      });
    }
// 
function load() {
  allProducts = JSON.parse(localStorage.getItem('allProducts'));  
}

function stockage() {
  localStorage.setItem('allProducts', JSON.stringify(allProducts));
}
function generer(array){

  $("#products").toggle();
  $("#view").append('<div id="aff" class="wrapper"><ul>');
  for (var i = 0; i < allProducts[array].length; i++) {  
    var insert= allProducts[array][i];
    $("#aff").append('<li><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="'+insert.photo+'"/></div><div class="card-content"><h3 class="card-title activator grey-text text-darken-4">'+insert.nom+'</h3><h6 class="right">'+insert.ref+'</h6></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">'+insert.nom+'</h3><h6 class="right">'+insert.pttc+'€</h6><p>'+insert.desc+'</p></div></div></li>')
  }
  slide();
}

function news(){
  $("#view").html("");
  var categ = Object.keys(allProducts);
  for (var i = 0; i < categ.length; i++) {
    $("#products").append('<a href="#" class="carousel-item"><img id="'+categ[i]+'" class="img" src="'+photo[categ[i]]+'"/></a>');

  }
  $('.carousel').carousel();
}


$("#products").delegate('img','click', function(e){
  e.preventDefault();
  var categorie = $(this).attr("id");
  generer(categorie);
});

$("#logo").click(function(e){
  e.preventDefault();
    //console.log("yopa");
    $("#products").toggle();
    $("#view").html("");
    //console.log("yop");
    news();
  });
  // à ajouter sous-cat(scat), unité de vente (unitv), prix unitaire (punit), promo (promo) et prix(ppromo)

  function slide(){
    $('.extra-slider').extraSlider({
      draggable:true,
      margin: 10
    })
  }
  online= window.navigator.online;
  if(navigator.online){
    alert("Connected")
  }else{
    alert("Bad connection")
  }