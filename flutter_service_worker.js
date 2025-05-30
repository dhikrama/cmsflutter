'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "0cc6ded6fc9eb369ba1c6a22cc8db99a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/AssetManifest.json": "0d8be223df64f684a30d1c7caf8e5489",
"assets/AssetManifest.bin": "16d26eb519f4e9e3ea9a403f56480427",
"assets/AssetManifest.bin.json": "88c715dcec5c7b4a4156f7da76617f6d",
"assets/NOTICES": "078a79dda2c3e0516d43256d2355306a",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"flutter_bootstrap.js": "44406fb1332328e97f4c0cd9572d3dd6",
"README.md": "1e7e07c665c6405db0db03666349bef0",
"manifest.json": "c65f867196b51a34bc86c3272a0b6da6",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "e801a477634c1264feb429bb34932e20",
"main.dart.js": "4d82f8143950568b047c88a44ecc5192",
"flutter.js": "76f08d47ff9f5715220992f993002504",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b4eb7c9545a00543961b8867c573a52a",
".git/refs/heads/main": "b4eb7c9545a00543961b8867c573a52a",
".git/FETCH_HEAD": "89507f4841b18fe36ca70c7ba537233e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/25/f58589b799eba483e4a1f43d4f5f386ec82c40": "f0edb4ce76529e2521efd74cb04b7e31",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6f/871fed6ae5b8b998aae5a9bebc6b8bd8e5743d": "2c8ac8cbce750fc4281a31cdf2912c18",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/c9/b4580307be7793b6a2f043ef308930a829e5fe": "541b73cd74ce9eb2a2326564d6a754d7",
".git/objects/2b/0607a03a8fe222f8e03daa7420ed54f0c9fc36": "a769da6329408c7822e7f66f5405d2b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/2c/5e8a811cddac99e422dd0d90bfd8dcc61580f4": "7e715c5220b0fce7e8aec0e030c9ccf3",
".git/objects/31/0495f26e90a38fdd73fb8c485c36b5ee51fb46": "c573a1f2ac0879279d5f9955343dad7b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/83/73e6103f5681fd39892e4396e4ecdbd249325b": "3fe4bb554428ea7957abf5d8e6159849",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9afbea7957bc09c6cce84796a03f2fe4eb2a5c": "5adde17031e730943aaf47e3aaadc539",
".git/objects/43/07507170343010d8fe60cd3b28bccbb14a40c9": "ca26d08a60562e7a60ba4b36d1a055c4",
".git/objects/95/3cc96d0375132d0c6ffdd96485814b8a251d1d": "47a1617745770d0d153d0dfd9a6e3a2b",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/ca/ea011f15f7d2c9638feba707554872d6a5b0e3": "df58a2213a21eb0b7c4b8c253c3540d3",
".git/objects/30/371c38cbb5b7ebbeb3d29142a7f98bf09b1a0b": "771ef5cb14ce2162701fe47b24eee954",
".git/objects/e8/55ab1ce2bb00c6c52893a1d9cf627b8849824a": "8c12625dc3b531c30ac1d6c44336c719",
".git/objects/e8/6214c919de72763079098749b4f3e89a22cb53": "6466b02450343d0a5c2bd16ecd8ff414",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a2cd2a90c888b9d6aeb4e215c9424fd328192c": "8ad98bc70242f795ff5778527eaf1c71",
".git/objects/4b/65a2fafef841c1b9a943d0e75dc243aa19ca66": "110b0f57ef83a85657180f5b42e26595",
".git/objects/9a/3bb7d7b601eabfb07128f0100ca244483dbbd9": "0a8d5c95f2d893b421dc9eb34440e920",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/0d/aab986b569ae997c6cc1aacacad01f155866f9": "0ccfc902d67e300539e1c2467ed167c4",
".git/objects/b6/dc8a23d20e0f672284c41471ba35c5c246aa36": "c4cb2fb12658b27d5d167b7565a360ca",
".git/objects/f9/553c40211a3979cb927d7611b8c3280d83b85c": "dddc9c6b61a36dabe4ebd5f68ca80a47",
".git/objects/fb/aad4f455415a7f73d5cd5954b1702d7873d7d4": "5f08abfa251458062c208848b50a01b0",
".git/objects/b7/d6a7a04afa506a63d26e5feb1685d3c7e51b62": "b0352135c6056ed17a658bbc2110a604",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/65/249d34cdbaf10d289128f01692ab810869ca27": "7e92e1a278a7c1153c542d88dcd7a638",
".git/objects/d9/a149423fc6d55f765da08ae25fe2b73219f7e1": "6398dea9bfa581f7ca0119b893829238",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/94/dba12faaef30224eeb391a29ebbd4bf0bdfc80": "38035e20bf5255c28206e8a34a030918",
".git/objects/e4/0b0b4e0ac7f961b3480bcaf17a4ea011e1ea79": "0d44601087621fbb4c7ed4713785d68d",
".git/objects/11/cb58bd077db7d3d930a012e7ef738540122d8f": "09db5234ab7452c834dbc4157205ff50",
".git/objects/7c/829f6d38b670d2d03a3f0933c515f7fd49b005": "a9003040a8cf8be8cb3803fdafe656b9",
".git/objects/02/928218f9c07a605c67af1ae577af07139436d5": "038d3d3a8a20026424a1b893422814e9",
".git/objects/19/6e35af957721dbb863f087070dbf842d22fff5": "5e07231389182f2dda55ac3a019cc676",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/87/2f94580a4518c4a1d10920fc5e8715e32b51a9": "40d139ee1be55b303721526f2c6af2d6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/469526050c8971c40961d60537b670755e653b": "fb55629c9da0d25333023336925a8225",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/aa/248a717952ef7de126f752ce1a8e4c97cb3bd6": "7858a979631d2f4bad020835de5a6d6b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/9d/14737f3760d005f3fad0c0e619acab465a1322": "aaf851e4cebf214ed34e0202a0943851",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/be/bb913fc9b81e385caf484c3a6132e0aaed4940": "fa020dd8ec6f21b0c41c62c33004fe40",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/7e/a491c8b30d1629b7fd2996278f6e8ef1f8f9b9": "be61b9a1654b3ab2affc50deb3d90046",
".git/objects/7e/ad096d533e413b63405e74c15223fab91d2d9e": "a9f57ab88aef29f552557ddaa469c565",
".git/objects/ed/51f09846c9d9c8b4c644a586dfc52c03d79a66": "08539c9cab12d8da6ecbfcb4dd7aa168",
".git/objects/56/4c704970d25ce65af03c039dcb104ad0a4ec3d": "a921dac4abc059ca26a408ae84199029",
".git/objects/ef/dc2886ed3a4e7180bcaf1a220c7f7f94690d18": "689ebc0ba42eeb64689c1d98b4dee94a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/bc/8b5d16c9dc42214d67d9312d0e6667e8b0a1a5": "7659a60952b4baebbbf1c8c3e0830adf",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/d6/a2f0781ee5a36307b3c43118d475c6b58ba880": "53d6837ff17d6761d1bf5714146b2938",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ee/906c7bc44b307bea075d68c1c96f1af88ed6a8": "c65c31668e79f17c3dd57e2e56e26098",
".git/objects/73/c182da61577bc9e9ec65829b32da14a3a5f02d": "1737d785e62c87d47de01880fe6fd75e",
".git/objects/81/1e0a0940803538cb45dfe06de6dc2ae30642bd": "3a5bf1252b23db66a180f53da747c811",
".git/objects/81/da9507e68178e7b7a4824a955126febd1e147c": "839f5f2f4b45a42570550e7ceae5df6b",
".git/objects/bb/2c42bceb73991785761d0e414ffa9d90ad9362": "be3ede7f8980230ce0cd2b41108bba4c",
".git/objects/5c/79a86b0ecf16eda49425ddeb14f2856a9e38d2": "48d5ce3817ab230ce21036cf4569bbe9",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/1e/16f1ac3c791b0d637fb3b4ecca7238e88bee5e": "43af8e6d290a617e6202bcb5f858f8a6",
".git/objects/0a/128572eadff50634493eea0eb2ad3ebadc7143": "319014188ce8d9dabfa784fcad15637c",
".git/objects/a3/dcc425ebfed74e6b96f343f1eb1311cee81912": "b71801a018aab5449666bdbcdfb816ee",
".git/objects/38/4a9d680690af0e582c06114f5829baa0969657": "2e0c54763f8914ec27cf921ba2a8eddd",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e0/b2f17efdf1a72d0bfa5a9a4a9711e8e3aa78f2": "3b6e3fabfce11aa6ead2cafa342489a9",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/ac/f2d49d5a6218a92f92280be68df5c715ba7f3f": "79c36a644d4b0649681a19e3e42f1989",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "0c9eb40b48f8b9e56a9e91144b147216",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/ORIG_HEAD": "e8ad25bd43f1d6f43c193b4de8cf9035",
".git/COMMIT_EDITMSG": "00624b426ac41c4e363992aa67ced150",
".git/logs/refs/remotes/origin/HEAD": "404d2a26eba1bc410189a49ce447d778",
".git/logs/refs/remotes/origin/main": "bcc3a1537b437f5d95cd3e917530ef88",
".git/logs/refs/heads/main": "3c7201019d385afc378a943803ea2f5a",
".git/logs/HEAD": "aa8e00823cf0d6790162489ffc7af660",
".git/config": "fe508856eae514dbe647387abf1cdba5",
"index.html": "e948d3412e1191fdbb5750e4be36a77d",
"/": "e948d3412e1191fdbb5750e4be36a77d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
