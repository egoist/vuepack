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
- [Offline Ready, perfect for progressive web app](/docs/pwa.md)
- [ESLint](/docs/eslint.md)
- [Babel 6](/docs/babel.md)
- [PostCSS](/docs/postcss.md)
- [JSX components are supported by default](/docs/jsx.md)
- [Testcafe](/docs/testcafe.md)
- [Electron support](/docs/electron.md) (optional)
- [CSS modules](/docs/css-modules.md) (optional)
- A boilerplate which is small and focusing on client-side apps

<h2></h2>

Check out [the docs](https://github.com/egoist/vuepack/tree/master/docs) for more usages.

## Get Started

You'd better have `node >=4` and `npm >=3` installed:

## sao

This template can be used with [sao](https://github.com/egoist/sao), which also means you can use the template offline:

```bash
yarn global add sao
# from npm
sao vuepack new-project
# or git repo
sao egoist/vuepack new-project
```

## vue-cli

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
├── tests           # e2e tests written by testcafe 
├── node_modules    # dependencies
└── package.json    # package info
```

## Custom template

You want to customize the output of `index.html`, simply modify [index.html](https://github.com/egoist/vuepack/blob/master/template/build/index.html), see more at [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

## License

MIT &copy; [EGOIST](https://github.com/egoist)
