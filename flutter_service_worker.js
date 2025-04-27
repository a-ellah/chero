'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef7c654d0aa8b414551ecb97777dc012",
"assets/AssetManifest.bin.json": "53cfc773343bd9d4f73a932a32b38037",
"assets/AssetManifest.json": "fed1213f547b7a0bedeb93a7883a731f",
"assets/assets/fav.json": "02aa1c1e555a5388f29e9a217f7c5c97",
"assets/assets/host_pinger.png": "9ccc1b8f9d764da59fc89cb963711af9",
"assets/assets/images/book.png": "c27fbcd61a639da2e8c9d6b07bcc9e01",
"assets/assets/images/chero.png": "2976ed7c8baff1b030a31412fd8b1de5",
"assets/assets/images/fav.jpg": "3edb856e5c69be098f4587effed8c330",
"assets/assets/images/img.png": "25ef492337b7aa463a5224b9f43b6511",
"assets/assets/images/logoBook.png": "8d2675ba2000728fe51b543457e54638",
"assets/assets/images/logoPharma.png": "fbcdfad4ee880c1a47f1d7c42e59632b",
"assets/assets/images/logoTour.png": "12b75eefbe1dd58fdc2486bf0c3c9a52",
"assets/assets/images/man.json": "8f186220d3762e7aeb4910509c51b211",
"assets/assets/images/pharma.png": "2243dd499cbec675098ddcccb5c2e859",
"assets/assets/images/tour.png": "c00ad3a7695ab2725ab00291c3ff7697",
"assets/assets/images/vBook.png": "f8f0cb562e803cb35eb8c044aaee3026",
"assets/assets/lens.json": "6397635f694bbcfb8d175ffb9d858385",
"assets/assets/loader.gif": "b11a6b06044b6dc8d284d09ad1cc4537",
"assets/assets/mini_notes.png": "1be89402b6f2f4b45ed59cd338c62585",
"assets/assets/no.json": "591f3698bfee70773c51df477d94624f",
"assets/assets/scanning.png": "66e69701e0311c3d61f891e8eae9118b",
"assets/assets/srch.json": "f41e6dd0315f953054aadb718a6c6185",
"assets/assets/tap.png": "cb46378abdd324e8a76a9ba7da444be0",
"assets/assets/weather.png": "e325c66c704187e7882e70e3153465c2",
"assets/assets/whois.png": "c01930aed7f57ac5d635739bad54213d",
"assets/FontManifest.json": "5540eebbcd23c81cfdc531eea503f329",
"assets/fonts/MaterialIcons-Regular.otf": "9edb1a72b8f680eb5ee1c57cc8af1527",
"assets/NOTICES": "5b93f44aac175a4eb3b350b2c6e64774",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e9afc865f3165c35b56a30862eee438a",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a01779819f6c59bdcf512dfb05d32026",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "7e435366658927f9ca6b3dbc445907e1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8539c2a0ca45a6e72bed41bf2e9dc77c",
"icons/Icon-192.png": "d9500e1de2a9cd6604229c06ba30623b",
"icons/Icon-512.png": "6fe1865ce8dc9556d295817e98bde10a",
"icons/Icon-maskable-192.png": "fd53f3051432aecdc2f6807e3b5fda96",
"icons/Icon-maskable-512.png": "737b7d01893ab86ff67d6be2e7da073b",
"index.html": "b9a6aae122e864136a8d230f246a9080",
"/": "b9a6aae122e864136a8d230f246a9080",
"main.dart.js": "ddd6e1495c1628de38caaf14ea407f5d",
"manifest.json": "f1e641ff29f9f71fca5ed4ac071628bb",
"version.json": "8cbe2a054d8bf49bef028c224bcf4c86"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
