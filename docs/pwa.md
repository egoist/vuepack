# Progressive Web App

A [progressive web app](https://developers.google.com/web/progressive-web-apps/) can work **offline**, **add to homescreen** and even more performance wins!

VuePack is using [offline-plugin](https://github.com/NekR/offline-plugin) so that your project will become offline ready by caching all (or some) of the webpack output assets.

The offline-plugin is only used in production environment, so no need to worry about the cache during development ;) Check out [./client/pwa.js](https://github.com/egoist/vuepack/blob/master/template/client/pwa.js) / [build/webpack.prod.js](https://github.com/egoist/vuepack/blob/master/template/build/webpack.prod.js#L51-L57) and [offline-plugin](https://github.com/NekR/offline-plugin) to know more.

---

To disable PWA support, simply remove [this](https://github.com/egoist/vuepack/blob/master/template/client/index.js#L4-L7) and [this](https://github.com/egoist/vuepack/blob/master/template/build/webpack.prod.js#L49-L57).
