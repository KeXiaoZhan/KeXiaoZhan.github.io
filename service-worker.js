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
    "revision": "124a12d6d7ac87f21f3c5e677a1bad24"
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
    "url": "assets/js/12.7f231f97.js",
    "revision": "05a328feee3c5a6667fd201c1e077c87"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.a4f14ad7.js",
    "revision": "414390e3837d548064f4ffd1c4809a7b"
  },
  {
    "url": "assets/js/15.d618cf92.js",
    "revision": "a2d0f51575afa3dcaa017af980cb1114"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.0c8ba930.js",
    "revision": "f3b3829f30862a26a1165dfbe885459c"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
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
    "url": "assets/js/app.22ba6a0a.js",
    "revision": "fdee2da068377dbd01dfe2cf6be87705"
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
    "revision": "14c26ba3192e054a38feea60d49dba38"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3cd4335f1f5604dee74acfff84a9f5bb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bfd4f8e9ff7efc2b2a661bda56822d85"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "56cb4a50e452afaf3655622c0bcb26f7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bc35efdc55d8df64cf4345ebada33479"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "57abc5f76c22c637d33974d4f30fad0d"
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
    "revision": "cfb5703dc5fefa55b7f3b47f69dfeb00"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b68f90538c5acb53257a045d8786a59f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "43326974284e335dc49880d940715b62"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "819622bda365cf3849a6d8f2eddaa1cc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3c446088542151e31155706f2bb8f4d6"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7fe2746b1fd221fba8b5da37b5833ee5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b0b4c8341fd2b48ab7a63c3e649a0e08"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3fcaf74c0ec86512a89abd20b42824bc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "90b9d7bfb2f8505921241fff37b5499f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "681d8a2935e8893c8e318f8d746c82bc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "acd69d54c0a50c625746aa7996512c08"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "22c2ac11b1cd2151b544dd0ac68e07c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b49789de6e79f28a2004810aa624d58"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "195617997e221a0ac84a7352a0851d9f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2ad51dc916b810acffca62715b7937a0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "92b4b0d10f738b8dd4d7647ff9f7eb52"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "440b741a537ca6a508eb9982b7eadcc5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c110b80c1b7fb837b985f4120be78ee9"
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
