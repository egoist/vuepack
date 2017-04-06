# CSS Modules

If you want to use CSS modules in single file component, simply add `module` attribute:

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

CSS modules is disabled in your non-vue components by default (eg: `import 'style.css'` in a JS file), but when you enabled JSX components in CLI prompts it will be set to `true` by default. However you can always toggle it on and off by setting `cssModules` in `./build/config.js`:

```diff
- cssModules: true
+ cssModules: false
```

For more documentations on the usage of CSS modules, please head to http://vue-loader.vuejs.org/en/features/css-modules.html
