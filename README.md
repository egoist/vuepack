# VuePack

[![release](https://img.shields.io/github/release/egoist/vuepack.svg)](https://github.com/egoist/vuepack/releases)
[![Join the chat at https://gitter.im/egoist/vuepack](https://badges.gitter.im/egoist/vuepack.svg)](https://gitter.im/egoist/vuepack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

## Technologies

- Vue
- Webpack
- Babel 6
- Redux
- Vue-Router
- Hot reloading
- PostCSS
- PreCSS
- Autoprefixer

## Cli tool

![preview](http://ww4.sinaimg.cn/large/a15b4afegw1eynsfgjmlqj20qo0f0wgu)

Use [VuePack Cli](https://github.com/egoist/vuepack-cli) to generate a new project:

```bash
npm install -g vuepack
vue init hello-vue
# or if you are located in China
# vue init hello-vue --cn
cd hello-vue
npm run dev
# wait for webpack to bundle then go to http://localhost:3030
# use `Ctrl+H` to toggle Redux Dev Panel
```

## Usage

|Command|Description|
|---|---|
|npm install|Install dependencies|
|npm run dev|Run webpack and server with hot-reload enabled|
|npm run dev:win|Run dev server on Win32 platform|
|npm run build|Build assets for production use, dumped in `./build`|

## License

MIT &copy; [EGOIST](https://github.com/egoist)
