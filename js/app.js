  
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
      var clientX;
        var clientY;
      var allProducts={};
      var data;

      var photo= {"traiteur": "/demo/images/corolles-aperitif.jpg",
      "plats cuisines": "/demo/images/langue-de-boeuf-piquante.jpg",
      "La marée": "/demo/images/truites-arc-en-ciel.jpg",
      "boucher": "/demo/images/steaks-hache-max.jpg",
      "volailles": "/demo/images/pintade-fermiere.jpg",
      "légumes": "/demo/images/julienne-legumes.jpg",
      "patissier": "/demo/images/coeur-fondant-au-chocolat.jpg",
      "glacier": "/demo/images/domes-praline-facon-rocher.jpg",
      "bio": "/demo/images/haricots-bio-mange.jpg",
      "Produits frais": "/demo/images/cafe-grains-pur-arabica.jpg"
    };

    function listMajors() {
      load();
      if(data === null){


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
              "photo": row[12].slice(23)});
          }          
         initCarousel();
         stockage();
        }else {
          
        }
      }, function(response) {
        appendPre('Error: ' + response.result.error.message);
      });
      }else{
        allProducts=data;
        initCarousel();
      }
    }
// 

function initCarousel(){
        var categ = Object.keys(allProducts);
      for (var i = 0; i < categ.length; i++) {
      $("#products").append('<div data-id="'+categ[i]+'" class="carousel-item ok"><div  style=\' background-image: url("'+photo[categ[i]]+'"); background-size:cover ; width : 500px ; height: 400px \'><button class="waves-effect waves-light btn">'+categ[i]+'</button></div></div>');
  }   
     $('.carousel').carousel(); 
  var lesImages = document.getElementsByClassName("ok");
          for(var iii = 0; iii<lesImages.length; iii++){
 lesImages[iii].addEventListener('touchstart',handleTouch,false);
            lesImages[iii].addEventListener('touchend',handleTouchEnd,false);
            lesImages[iii].addEventListener('click',handleClick,true);          }
 
}
function handleClick(e){
      // console.log(e);
      e.preventDefault();
      console.log('ok');
      var categorie = $(this).data("id");
      generer(categorie);      
   }

   function handleTouchEnd(e){
        var deltaX, deltaY;

       // Compute the change in X and Y coordinates.
        // The first touch point in the changedTouches
        // list is the touch point that was just removed from the surface.
        deltaX = e.changedTouches[0].clientX - clientX;
        deltaY = e.changedTouches[0].clientY - clientY;

       if(deltaX ===0 && deltaY ===0){
          var categorie = $(this).data("id");
          generer(categorie);
          clientX=0;
          clientY=0;
        }
    }

   function handleTouch(e){
      e.preventDefault();
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      // alert(clientX);
  
    }
function load() {
  data = JSON.parse(localStorage.getItem('allProducts'));  
}

function stockage() {
  localStorage.setItem('allProducts', JSON.stringify(allProducts));
}
function generer(array){
  $(".open").toggle();
  $("#view").append('<div id="aff">');
  for (var i = 0; i < allProducts[array].length; i++) {  
    var insert= allProducts[array][i];
    if(insert.promo !== ""){
          $("#aff").append('<div class="card large"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="/demo/image'+insert.photo+'"/></div><div class="card-content"><h4 class="center free">Promotion</h4><h5 class="card-title activator grey-text text-darken-4 name">'+insert.nom+'</h5><div><h6 class="left promo">Prix :'+insert.pttc+'€</h6></div><h6 class="right">Ref: '+insert.ref+'</h6></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">'+insert.nom+'</h3><div class="row group"><ul><li><h6 class="left promo">Prix: '+insert.pttc+'€</h6></li><li><h6 class="left">Réduction: '+insert.promo+'€</h6></li><li><h6 class="left">Prix promo :'+insert.ppromo+'€</h6></li></ul></div><p>'+insert.desc+'</p></div></div>');

    }else{
    $("#aff").append('<div class="card large"><div class="card-image waves-effect waves-block waves-light"><img class="activator img" src="/demo/image'+insert.photo+'"/></div><div class="card-content"><h5 class="card-title activator grey-text text-darken-4 name">'+insert.nom+'</h5><div><h6 class="left">Prix :'+insert.pttc+'€</h6><h6 class="right">Ref: '+insert.ref+'</h6></div></div><div class="card-reveal"><h3 class="card-title grey-text text-darken-4">'+insert.nom+'</h3><div class="row"><h6 class="left">Prix: '+insert.pttc+'€</h6></div><p>'+insert.desc+'</p></div></div>');
      
    }
  }
}
$("#logo").click(function(){
    $(".open").toggle();
    $("#view").html("");
  });
  online = window.navigator.onLine;
if(online){
  //alert("connected");
}else{
  listMajors();
}

  // à ajouter sous-cat(scat), unité de vente (unitv), prix unitaire (punit), promo (promo) et prix(ppromo)