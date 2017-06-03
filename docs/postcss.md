# PostCSS

By default we only use `autoprefixer` and `postcss-nested` in PostCSS,
you can update `postcss` field in `package.json` to use custom plugins.

## Autoprefixer

Autoprefixer respects the `browserslist` field in `package.json`, the default value we use is: `['ie > 8', 'last 2 versions']`
