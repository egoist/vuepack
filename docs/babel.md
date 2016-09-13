# Babel

This default settings for `babel-loader` in Vuepack:

```js
{
  babelrc: false,
  presets: [
    ['es2015', {modules: false}],
    'stage-1'
  ],
  plugins: [
    'transform-vue-jsx'
  ]
}
```

Which means you can use all ES2015 and ESnext stage-1 features, and Vue JSX support.

You can update it in `./build/config.js`.
