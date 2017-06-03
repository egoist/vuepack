# Babel

By default, we're using the official [babel-preset-vue-app](https://github.com/vuejs/babel-preset-vue-app).

```json
{
  "presets": [
    ["vue-app", {
      "useBuiltIns": true
    }]
  ]
}
```

You can update `babel` field in `package.json` to use custom presets and plugins.
