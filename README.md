# VuePack

A starter for Vue and Webpack, Hot-reload, PostCSS, Redux, Revue, Redux-Devtools, Build tools.

>Note that Node 5(with NPM 3) or above is highly recommended for a faster installing speed(especially for Babel 6) and preventing from unknown issues.

## Cli tool

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

## TODO

VuePack will stay simple for a while, but eventually its goal is to be a Rails-like tool for Vue. Cuz it's definitely a waste of time to configure things, especially front-end stuffs.

## License

MIT.
