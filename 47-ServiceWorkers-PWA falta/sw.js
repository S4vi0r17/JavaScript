const CACHE_NAME = 'apv-v1';

const files = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];

self.addEventListener('install', event => {
    console.log('Instalando el serviceWorker...');
    console.log(event);

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cacheando...');
                cache.addAll(files);
            })
    )
})

self.addEventListener('activate', event => {
    console.log('ServiceWorker activado');
    console.log(event);
})

self.addEventListener('fetch', event => {
    console.log('Fetch...', event);

    event.respondWith(
        caches.match(event.request)
            .then(resp => {

                return resp
            })
            .catch(() => caches.match('./error.html'))
    )
})