# Sass & Others

You may intend to use `sass-loader` or `less-loader` for the CSS section in `.vue` single file component, well, it's easy:

## Install the loader

```bash
# for example, use sass
npm install -D sass-loader node-sass
```

## Update the tag `lang` attibute

```vue
<style lang="scss">
  $color: red;
  body {
    color: $color;
  }
</style>
```
