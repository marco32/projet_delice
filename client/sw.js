var cacheName = 'Bianchi_Delice'; //le nom de mon cache !

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
 '/',
 '/index.html',
 '/css/style.css',
 '/css/materialize.min.css',
 '/js/app.js',
 '/js/materialize.min.js',
 '/js/jquery.min.js',
 '/fonts/roboto/Roboto-Bold.woff',
 '/fonts/roboto/Roboto-Bold.woff2',
 '/fonts/roboto/Roboto-Light.woff',
 '/fonts/roboto/Roboto-Light.woff2',
 '/fonts/roboto/Roboto-Medium.woff',
 '/fonts/roboto/Roboto-Medium.woff2',
 '/fonts/roboto/Roboto-Regular.woff',
 '/fonts/roboto/Roboto-Regular.woff2',
 '/fonts/roboto/Roboto-Thin.woff',
 '/fonts/roboto/Roboto-Thin.woff2',
 '/images/salsifis.jpg',
 '/images/poulet.jpg',
 '/images/dinde.jpg',
 '/images/coquilles-fruits-de-mer.jpg',
 '/images/logo.jpg',
 '/product.json',
 '/favicon.ico',
 '/manifest.json'
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
