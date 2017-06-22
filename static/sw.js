importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.da72115b44d4b64478f8.js",
    "revision": "77a89381d76d16f7af166a41aca39613"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.be2c2ebc7d7017ca8f36.js",
    "revision": "c04b68b61abf7e65ae1bda1be69e0fa9"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c10bdc93075c9d7bcabe.js",
    "revision": "03c9440ff0fc0eb45b06de991a6c7af5"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "1d2207d8784bf8ea1018d30b3f77f663"
  },
  {
    "url": "/_nuxt/common.720ef77199b37440f681.css",
    "revision": "94df37ca956d73058889563501b7dca6"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.94a1f92ccf056c15cc75.js",
    "revision": "f682879ceb0ea12fefce3fbbcfb4734f"
  },
  {
    "url": "/_nuxt/manifest.c8e8bcc2.json",
    "revision": "5506bd0f4bd956450c4c34a816f15b56"
  },
  {
    "url": "/_nuxt/nuxt.bundle.720ef77199b37440f681.js",
    "revision": "2b9971dbd825a5ec925b8c61e8fced04"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "1fbe3f9ef40f05b3f7a6569d099ab64d"
  },
  {
    "url": "/_nuxt/vendor.bundle.be78abcaf3f7f01e3f30.js",
    "revision": "b793005c13274f30b7a751caef251e40"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-blog_0.0.1",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
