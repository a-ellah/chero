'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f434faa8c162cf98fcbe0a03e0351ac",
"assets/AssetManifest.bin.json": "34ac6b7b63b360c3431bb47467e7f7b2",
"assets/AssetManifest.json": "741af0829f64a0d586ba2c8ef836d7aa",
"assets/assets/cat.json": "6a40eccb52619942ec9c24eda47b2988",
"assets/assets/fav.json": "02aa1c1e555a5388f29e9a217f7c5c97",
"assets/assets/fonts/CoronetSSK.ttf": "cd16d53891d4a13bed9c1a05759b32a0",
"assets/assets/host_pinger.png": "9ccc1b8f9d764da59fc89cb963711af9",
"assets/assets/images/chero.png": "2976ed7c8baff1b030a31412fd8b1de5",
"assets/assets/images/fav.jpg": "3edb856e5c69be098f4587effed8c330",
"assets/assets/images/img.png": "25ef492337b7aa463a5224b9f43b6511",
"assets/assets/images/logoBook.png": "8d2675ba2000728fe51b543457e54638",
"assets/assets/images/logoPharma.png": "fbcdfad4ee880c1a47f1d7c42e59632b",
"assets/assets/images/logoTour.png": "12b75eefbe1dd58fdc2486bf0c3c9a52",
"assets/assets/images/man.json": "8f186220d3762e7aeb4910509c51b211",
"assets/assets/images/pharma.png": "2243dd499cbec675098ddcccb5c2e859",
"assets/assets/images/sBook.png": "c27fbcd61a639da2e8c9d6b07bcc9e01",
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
"assets/FontManifest.json": "7d99f429bbd09f950c5df01a9a3aed2a",
"assets/fonts/MaterialIcons-Regular.otf": "f5b3481e841f330084447d6d9bd5ac28",
"assets/NOTICES": "d458ab10da1a80846537d6b2b0252d06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "94743d874c2993c240c29920365ab3b4",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "051f048f5a3d26f793ae49f62609b827",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "4acf322f4fd5e86e7583b7e8380f3316",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b8f8bf42aad67dd126e1e6372056293",
"/": "4b8f8bf42aad67dd126e1e6372056293",
"main.dart.js": "d8ee9525cb692c210f4b2a0276ebac10",
"manifest.json": "21d58708517554bb7db2685d5046628a",
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
