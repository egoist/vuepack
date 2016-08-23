<p align="center">
  <img src="http://ww4.sinaimg.cn/large/a15b4afegw1f6k20fb3p5j205o05ogli" alt="vuepack" width="60">
  <br><br><strong>VuePack</strong> is a modern Vue.js starter <br>which uses Vue 2, Vuex, Vue-router and Webpack 2.
</p>

## Before you started

If you have been suffering from configuration hell, give [vbuild](https://github.com/egoist/vbuild) a chance.

## Features

- Vue 2
- Latest version of Vuex/Router
- Webpack 2
- Babel 6
- Hot reloading
- Split vendor code from your app
- JSX support (optional)
- Electron support (optional)
- [CSS modules](https://github.com/css-modules/css-modules) are enabled by default in JSX mode
- A boilerplate which is small and focusing on client-side apps

<h2></h2>

For Vue 1 please head to [vue-1](https://github.com/egoist/vuepack/tree/vue-1) branch, however it's deprecated.

For Isomorphic rendering please head to [vue-isomorphic-starter](https://github.com/egoist/vue-isomorphic-starter).

## Get Started

You'd better have `node >=4` and `npm >=3` installed:

```bash
$ npm install -g vue-cli
$ vue init egoist/vuepack new-project
$ cd new-project
$ npm install

# edit files and start developing
$ npm run dev
# bundle all scripts and styles for production use
$ npm run build
```

### For Windows users

Install `git with unix tools` before getting started.

### For Electron app

**Hot reloading also works in your Electron app!**

If you enable Electron support during the setup, it's a little different to develop the app:

```bash
# same as regular app
$ npm run dev
$ npm run build

# open your electron app by running:
$ npm run app
```

## Folder Structure

If you did not enable Eletron support, the dest folder is `./dist`, otherwise it's `./app/dist`. `./app` folder only exists when you enabled Electron support.

```bash
├── app             # the actual app you want to bundle with Electron
│    ├── assets     # directory which contains all bundled files
│    ├── index.html # generated index.html for Electron
│    └── index.js   # entry file for Electron
├── build           # webpack configs and other scripts
├── client          # client-side app files
├── dist            # bundled files and index.html
│    ├── index.html
│    └── assets    
├── node_modules    # dependencies
└── package.json    # package info
```

## Custom template

You want to customize the output of `index.html`, simply modify [index.html](https://github.com/egoist/vuepack/blob/master/template/build/index.html), see more at [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

## License

MIT &copy; [EGOIST](https://github.com/egoist)
