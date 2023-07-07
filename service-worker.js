/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "59ad43e10ff2b9908cc45e14b3eee98d"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.90e80a1f.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6edf7f3f.js",
    "revision": "4f4e7f7a92bfb7ae20c15956772e8771"
  },
  {
    "url": "assets/js/13.b80a4af1.js",
    "revision": "a5b647e7d8071aedbc96b9881f882c2a"
  },
  {
    "url": "assets/js/14.5be2e989.js",
    "revision": "39142490c34d8b87eef5230e87d45f41"
  },
  {
    "url": "assets/js/15.c1e5e647.js",
    "revision": "093c90a0e10c4035ae10e0aea613fcc7"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.66972c9b.js",
    "revision": "206181d85b857baea779be315406a7b6"
  },
  {
    "url": "assets/js/18.5dd2ba73.js",
    "revision": "4e7c6eed2cd1035eb0452c6068c17d61"
  },
  {
    "url": "assets/js/4.189d5730.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.78ce80c4.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.b46d2185.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.8e5767f2.js",
    "revision": "ddf7cb38b46b58b5a05513c5ea680970"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5e5d924d04ce954b71cc24bdbd97a7ca"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a940010c9f510f2b32c223101f9e9977"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2416f0e409cca24604d10012bc980b87"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cbe0b6fc736dc12ac636e90fc315929c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0f594bb9db868699b65eb4632e63bc8d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ed4dc26fec220e29d24ba6a854a60ca8"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7826f6bfa1243e5d9f2361715b3a8ccf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3b487e9cd0a3b50f08cd1ec8196ae08d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a36911ff6ecf18c1563e67c110480f4b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1f12944e5e6105babfe9ac928a33f1e6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e078a4bf7648cf36e2414048142d8aa1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "287a0cfc149f9a22aa48bc455790a861"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0ef51395b301a6422f9aac13ad53a84e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6d4b1e7c69c484106fca0d1228d85c05"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3938aae62b374b276de872bbaeb8bc21"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "81f78050d511d4791a6794927c8765d5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "204d58b29d4421a72e032af7abe37d4b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "50fd8ffc3807723c1565ba53f9aee0ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6945d0c9a34a4a8e6eebdbfde793811"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f08efcc89cc6870ee9f7b91584aff4ef"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e28a739e8eee4bc74e0c1fb66e6cb849"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6d4c54911d9cbd283c1da5cecf528c9b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "44478a454fd40553453f9b1ded6a2bf1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b6ee2907f9f5ec6937757f28ff6530bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
