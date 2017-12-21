### npm-starter-bp
---
npm-starter-bp is an easy to understand, easy to modify boilerplate for building templates.

#### Install
*\* node.js required*

`$ cd npm-starter-bp`

`$ npm i`

`$ npm run dev`


#### Commands
  * `npm run dev` || `npm run build:dev` - build assets and run a local development server for hot-reloading
  * `npm run prod` || `npm run build:prod` - build and minify assets.
  * *single-task commands can be found in package.json -- {scripts}*

#### CSS
---
  * [PostCSS](https://github.com/postcss/postcss)
    * [autoprefixer](https://github.com/postcss/autoprefixer): automatically generate vendor-prefixes.
    * [css-mqpacker](https://github.com/hail2u/node-css-mqpacker): combine like @media queries
    * [cssnano](http://cssnano.co/): CSS minification
    * [postcss-partial-import](https://github.com/jonathantneal/postcss-partial-import): concat @import files
    * [postcss-nesting](https://github.com/jonathantneal/postcss-nesting): PostCSS implementation of [CSS Nesting Module lvl3](https://tabatkins.github.io/specs/css-nesting/)
    * [postcss-discard-comments](https://github.com/ben-eb/postcss-discard-comments): Remove comments from output file.

#### JS
---
  * [Rollup.js](https://rollupjs.org/)
    * [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel): transform es6/2015 syntax javascript to es5 that is understood by most browsers
    * [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs): use es6/2015 import syntax for commonJS modules
    * [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve): locate 3rd party modules in `node_modules` folder for use
    * [rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace): x-platform ENV variables for rollup
    * [rollup-plugin-uglify](https://github.com/TrySound/rollup-plugin-uglify): javascript minification

#### IMAGE
---
  * [svgo](https://github.com/svg/svgo): optimize SVG images
