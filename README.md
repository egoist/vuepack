<p align="center">
  <img src="http://ww4.sinaimg.cn/large/a15b4afegw1f6k20fb3p5j205o05ogli" alt="vuepack" width="60">
  <br><br><strong>VuePack</strong> is a modern Vue.js starter <br>which uses Vue 2, Vuex, Vue-router and Webpack 2.
</p>

## Before getting started

If you have been suffering from configuration hell, give [vbuild](https://github.com/egoist/vbuild) a chance. `vbuild` is 100% compatible with this template.

## Features

- Vue 2 / Vue-router / Vuex
- Hot reloading for single-file components
- Split vendor code from your app
- Webpack 2
- [ESLint](/docs/eslint.md)
- [Babel 6](/docs/babel.md)
- [PostCSS](/docs/postcss.md)
- [JSX components are supported by default](/docs/jsx.md)
- [Electron support](/docs/electron.md) (optional)
- [CSS modules](/docs/css-modules.md) (optional)
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

# lint your code
$ npm run lint
```

### For Windows users

Install `git with unix tools` before getting started.

## Folder Structure

If you did not enable Eletron support, the dest folder is `./dist`, otherwise it's `./app/dist`. 

`./app` folder only exists when you enabled Electron support.

```bash
├── app             # the actual app you want to bundle with Electron
│    ├── dist       # directory which contains all bundled files
│    └── index.js   # entry file for Electron
├── build           # webpack configs and other scripts
├── client          # client-side app files
├── dist            # bundled files and index.html
│    ├── index.html
│    └── [...other bundled files]   
├── node_modules    # dependencies
└── package.json    # package info
```

## Custom template

You want to customize the output of `index.html`, simply modify [index.html](https://github.com/egoist/vuepack/blob/master/template/build/index.html), see more at [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

## License

MIT &copy; [EGOIST](https://github.com/egoist)
