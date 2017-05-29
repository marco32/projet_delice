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
 '/bianchiTestPage/',
 '/bianchiTestPage/index.html',
 '/bianchiTestPage/css/style.css',
 '/bianchiTestPage/css/materialize.min.css',
 '/bianchiTestPage/js/app.js',
 '/bianchiTestPage/js/materialize.min.js',
 '/bianchiTestPage/js/jquery.min.js',
 '/bianchiTestPage/fonts/roboto/Roboto-Bold.woff',
 '/bianchiTestPage/fonts/roboto/Roboto-Bold.woff2',
 '/bianchiTestPage/fonts/roboto/Roboto-Light.woff',
 '/bianchiTestPage/fonts/roboto/Roboto-Light.woff2',
 '/bianchiTestPage/fonts/roboto/Roboto-Medium.woff',
 '/bianchiTestPage/fonts/roboto/Roboto-Medium.woff2',
 '/bianchiTestPage/fonts/roboto/Roboto-Regular.woff',
 '/bianchiTestPage/fonts/roboto/Roboto-Regular.woff2',
 '/bianchiTestPage/fonts/roboto/Roboto-Thin.woff',
 '/bianchiTestPage/fonts/roboto/Roboto-Thin.woff2',
 '/bianchiTestPage/images/salsifis.jpg',
 '/bianchiTestPage/images/poulet.jpg',
 '/bianchiTestPage/images/dinde.jpg',
 '/bianchiTestPage/images/coquilles-fruits-de-mer.jpg',
 '/bianchiTestPage/images/logo.jpg',
 '/bianchiTestPage/favicon.ico',
 '/bianchiTestPage/manifest.json',
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
