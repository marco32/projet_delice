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
 '/projet_delice/images/1.jpg',
 '/projet_delice/images/2.jpg',
 '/projet_delice/images/3.jpg',
 '/projet_delice/images/4.jpg',
 '/projet_delice/images/logo.jpg',
 '/projet_delice/favicon.ico',
 '/projet_delice/manifest.json',
 'https://apis.google.com/js/api.js',
 'https://apis.google.com/js/googleapis.proxy.js?onload=startup',
 'https://apis.google.com/js/rpc:shindig_random.js?onload=init',
 'https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.fr.XCdm_G9BiDk.O/m=googleapis_proxy/rt=j/sv=1/d=1/ed=1/am=AQ/rs=AGLTcCOTic-s0lSx38xIfO6GP-IasmSR3w/cb=gapi.loaded_0',
 'https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.fr.XCdm_G9BiDk.O/m=rpc,shindig_random/rt=j/sv=1/d=1/ed=1/am=AQ/rs=AGLTcCOTic-s0lSx38xIfO6GP-IasmSR3w/cb=gapi.loaded_0',
 'https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.fr.XCdm_G9BiDk.O/m=auth2,client/rt=j/sv=1/d=1/ed=1/am=AQ/rs=AGLTcCOTic-s0lSx38xIfO6GP-IasmSR3w/cb=gapi.loaded_0',
 'https://ssl.gstatic.com/accounts/o/2828155119-idpiframe.js',
 'https://ssl.gstatic.com/accounts/o/1223855322-postmessagerelay.js',

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
