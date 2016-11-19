# CSS frameworks

You may intend to load CSS files from Bootstrap, Bulma.css, Element-UI, there're various ways to do this:

## Option 1. load in JavaScript files

```js
import '/path/to/file.css'
// or commonjs
require('/path/to/file.css')

// if you're loading something like `file.scss`
// be sure to add sass-loader in webpack config for `.scss` files
import '/path/to/file.scss'
```

## Option 2. load in single file component

This way is way more easier, since you don't need to modify webpack config, just installing the relevant loaders is enough.

```vue
<style src="/path/to/file.css"></style>

<!-- or sass with sass-loader and node-sass installed -->
<style src="/path/to/file.scss" lang="sass"></style>

<!-- for example, loading sass files and update variables in bulma css framework -->
<style lang="sass">
$blue: #72d0eb;
$pink: #ffb3b3;
$family-serif: "Georgia", serif;

@import "~bulma";
</style>
```
