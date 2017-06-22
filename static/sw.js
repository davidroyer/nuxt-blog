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
    "revision": "c5838c1e2af5d7834b5d7cfef260f93c"
  },
  {
    "url": "/_nuxt/common.8c257ac8dee653f5d742.css",
    "revision": "94df37ca956d73058889563501b7dca6"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.37833d70.json",
    "revision": "46a629c84c9a53d8d5d8208e9851df77"
  },
  {
    "url": "/_nuxt/manifest.5cbe72165967b315be15.js",
    "revision": "39805ff335ec95410823e307603438de"
  },
  {
    "url": "/_nuxt/nuxt.bundle.8c257ac8dee653f5d742.js",
    "revision": "868b4ccceae69e4ffb4a3a5a0bb3fa1a"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "509669c886d8bc4c089bede4993fb38e"
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
