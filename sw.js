var cacheName = 'Bianchi_DeliceV2'; //le nom de mon cache !

// J'assigne un écouteur 'install' à mon service worker
self.addEventListener('install', function(e){
  // Cool il est installé !
  //console.log('[ServiceWorker] Install');
  e.waitUntil(
    // Je récupére mon cache du nom de pwa
    caches.open(cacheName).then(function(cache) {
      // Je fais là mise en cache de ma PWA
      //console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
      // filesToCache : tableaux contenant les différents path vers les fichiers que je veux stocker.
    })
  );
});


//impossible de mettre un dossier entier, ce n'est pas une liste de fichier mais une liste de requete get
//pour lequelle il faut mettre en cache la reponse
var filesToCache = [
 '/projet_delice/',
 '/projet_delice/css/stroll.min.css',
 '/projet_delice/index.html',
 '/projet_delice/css/style.css',
 '/projet_delice/css/extra.slider.css',
 '/projet_delice/js/extra.slider.js',
 '/projet_delice/css/materialize.min.css',
 '/projet_delice/js/app.js',
 '/projet_delice/js/materialize.min.js',
 '/projet_delice/js/jquery.min.js',
 '/projet_delice/js/stroll.min.js',
 '/projet_delice/fonts/roboto/Roboto-Bold.woff',
 '/projet_delice/fonts/roboto/Roboto-Bold.woff2',
 '/projet_delice/fonts/roboto/Roboto-Light.woff',
 '/projet_delice/fonts/roboto/Roboto-Light.woff2',
 '/projet_delice/fonts/roboto/Roboto-Medium.woff',
 '/projet_delice/fonts/roboto/Roboto-Medium.woff2',
 '/projet_delice/fonts/roboto/Roboto-Regular.woff',
 '/projet_delice/fonts/roboto/Roboto-Regular.woff2',
 '/projet_delice/fonts/roboto/Roboto-Thin.woff',
 '/projet_delice/fonts/roboto/Roboto-Thin.woff2',
 '/projet_delice/images/corolles-aperitif.jpg',
 '/projet_delice/images/langue-de-boeuf-piquante.jpg',
 '/projet_delice/images/truites-arc-en-ciel.jpg',
 '/projet_delice/images/steaks-hache-max.jpg',
 '/projet_delice/images/pintade-fermiere.jpg',
 '/projet_delice/images/julienne-legumes.jpg',
 '/projet_delice/images/coeur-fondant-au-chocolat.jpg',
 '/projet_delice/images/domes-praline-facon-rocher.jpg',
 '/projet_delice/images/haricots-bio-mange.jpg',
 '/projet_delice/images/cafe-grains-pur-arabica.jpg',
 '/projet_delice/images/logo.jpg',
 '/projet_delice/favicon.ico',
 '/projet_delice/manifest.json',
 
];


// ./sw.js

// J'assigne un écouteur 'fetch' à mon service worker
self.addEventListener('fetch', function(e) {
  // J'intercepte bien une requéte x ou y.
  //console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    // Jy réponds soit avec une ressource trouvé dans mon cache (responde) soit en renvoyant la requête
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
