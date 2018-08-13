importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "piet-web",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e36715dc7e0befbf838e.js",
    "revision": "bb0fe6f62d04e78f112024e8b425e4ef"
  },
  {
    "url": "/_nuxt/layouts/default.c39aa860fce29e432899.js",
    "revision": "5df596da21fd4b4bd7844eeab3c39f56"
  },
  {
    "url": "/_nuxt/layouts/intro.a71592754ad782dc894f.js",
    "revision": "d8697b6fd0321d03313e096957a033ce"
  },
  {
    "url": "/_nuxt/layouts/test.a1c4b7a12ed8f20d822d.js",
    "revision": "eec96313286e2357425f1fb771f6b60a"
  },
  {
    "url": "/_nuxt/manifest.8111182ebb71b5e7f674.js",
    "revision": "32db836893db13790d8ba845912e93d6"
  },
  {
    "url": "/_nuxt/pages/components/button.0de03b97da9b782581e9.js",
    "revision": "2af4d00e0b00be20ae1c492293c47dc7"
  },
  {
    "url": "/_nuxt/pages/components/forms.50db3f160f1007f03e89.js",
    "revision": "01fa4f9c80727ac4b62b447aafd26fcf"
  },
  {
    "url": "/_nuxt/pages/components/grid.abf25b8f4698b98b3c88.js",
    "revision": "17332ca7fd2554123086393a3fdbea71"
  },
  {
    "url": "/_nuxt/pages/components/index.c0d89a0520c31ab4cf19.js",
    "revision": "67fd29a48a907fb260046f6ea6d1b319"
  },
  {
    "url": "/_nuxt/pages/components/modal.d7d77e2561bc8445b5ed.js",
    "revision": "ce1dd67ded50216f1229b16a9087b1c9"
  },
  {
    "url": "/_nuxt/pages/components/navigation.020f3a8a34a997c2c998.js",
    "revision": "0f2cf262abe8989874dae7639f1204ef"
  },
  {
    "url": "/_nuxt/pages/docs/flexbox.ca5351d77635146d20a9.js",
    "revision": "c80c00b9f4ac08cf50038a6c5333e578"
  },
  {
    "url": "/_nuxt/pages/docs/index.b56e0891f4be4e182a45.js",
    "revision": "dd4f6c3f89f60169ac4cbb0e0c9831f3"
  },
  {
    "url": "/_nuxt/pages/docs/output.32b38c97f19a4da5fcac.js",
    "revision": "20b6418fb11a201d7c2bb8b36743a9c7"
  },
  {
    "url": "/_nuxt/pages/docs/typography/font-families.5675f2f8958e11e2d91a.js",
    "revision": "7e447751d6766a091d5ad76016d350b1"
  },
  {
    "url": "/_nuxt/pages/docs/typography/font-headings.6a295d7b1b4b246ee76b.js",
    "revision": "29d3c710614d7abd99783ecfe7b05ab7"
  },
  {
    "url": "/_nuxt/pages/docs/typography/font-include.f8ee101e74a373422516.js",
    "revision": "7f48c467306cd0360f7105ff77526091"
  },
  {
    "url": "/_nuxt/pages/docs/typography/index.9a0aa77eedd11d758b37.js",
    "revision": "4c4fb362a18899746cb73eb43f9634ea"
  },
  {
    "url": "/_nuxt/pages/features/index.bbb685e1bbab26d4b04d.js",
    "revision": "5aaa11114864e61e98be2bf5a1e300f3"
  },
  {
    "url": "/_nuxt/pages/index.2f515d225b627f468449.js",
    "revision": "6105b1dd9a69011d1dcb21910795fe05"
  },
  {
    "url": "/_nuxt/pages/test.379bd2708f92a85e305a.js",
    "revision": "caa12cdfb11d68e8c2e517ef900f0d7b"
  },
  {
    "url": "/_nuxt/vendor.1ef3118f81c9c683bfa2.js",
    "revision": "758a9c34c39e1c9d5abc0b7923f4fbae"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

