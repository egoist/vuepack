# CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) is disabled by default for your non-`.vue` files. However you can enable it in `./build/config.js`:

```diff
- cssModules: false
+ cssModules: true
```

If you want to use CSS modules in single file component, simply:

```vue
<style module>
  .foo {
    color: blue;
  }
</style>

<template>
  <div id="app">
    <div :class="$style.foo">foo</div>
  </div>
</template>
```

For more documentations on this, please head to http://vue-loader.vuejs.org/en/features/css-modules.html
