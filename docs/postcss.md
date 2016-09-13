# PostCSS

This default settings for `postcss-loader` in Vuepack:

```js
[
  require('autoprefixer')({
    // Vue does not support ie 8 and below
    browsers: ['last 2 versions', 'ie > 8']
  }),
  require('postcss-nested')
]
```

You can update it in `./build/config.js`.
