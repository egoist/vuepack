# Static Files

We are using [file-loader](https://github.com/webpack/file-loader) to handle static files, which mean you can directly import the file you need and it will give you the path of that file:

```js
import foo from './assets/foo.png'
//=> /public-path/foo.8a3c262cfd45869e351f.png
```

But we also use [raw-loader](https://github.com/webpack/raw-loader) to handle `.svg` files, it would direcly give you the raw content of the SVG so that you can inline it to your component, since [Inline SVG is Best SVG](https://www.youtube.com/watch?v=af4ZQJ14yu8).

---

For something like **favicon.ico**, we use [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin) to copy everything inside `./static` folder to the root of dist folder.
