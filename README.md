If you want to build a Vue app really really fast, try using [vbuild](https://github.com/egoist/vbuild) now, which means no setup for you to start a Vue app.

# VuePack

[![release](https://img.shields.io/github/release/egoist/vuepack.svg)](https://github.com/egoist/vuepack/releases)
![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

## Technologies

- Vue
- Webpack
- Babel 6
- Vuex
- Vue-Router
- Hot reloading components and Vuex mutations
- PostCSS & cssnext
- Autoprefixer

## Quick Start

```bash
$ git clone https://github.com/egoist/vuepack.git 
$ cd vuepack
$ npm install
$ npm run dev
# open http://localhost:3030
```

## Usage

|Command|Description|
|---|---|
|npm install|Install dependencies|
|npm run dev|Run webpack and server with hot-reload enabled|
|npm run build|Build assets for production use, dumped in `./build`|

## Customize the devServer

You can directly modify [scripts/devServer.js](https://github.com/egoist/vuepack/blob/master/scripts/devServer.js) since it simply uses [Express](http://expressjs.com) under the hood. 

Or, in a more recommended way, update the [scripts/wrap.js](https://github.com/egoist/vuepack/blob/master/scripts/wrap.js) instead.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
