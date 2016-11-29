# Electron app

**Hot reloading also works in your Electron app!**

If you enable Electron support during the setup, it's a little different to develop the app:

```bash
# same as regular app
$ npm run dev
$ npm run build

# open your electron app by running:
$ npm run app
```

**Note:** In Electron mode, if you open http://localhost:4000 in browser you will get a `require is not defined` error or something similar, because we're using webpack target `electron-renderer`, native modules like `querystring` or `electron` won't be "browserified" when you `require` them.
