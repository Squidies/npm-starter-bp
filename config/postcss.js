/**
 * PostCSS config
 */

const fs = require('fs')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const cssnano = require('cssnano')
const postcss_import = require('postcss-partial-import')
const postcss_nesting = require('postcss-nesting')
const postcss_comments = require('postcss-discard-comments')

// plugins array
const plugins = [
                  postcss_import,
                  postcss_nesting,
                  postcss_comments({removeAllButFirst: true}),
                  autoprefixer,
                  mqpacker
                ]

// add cssnano (minification) to postcss plugins array
if(process.env.NODE_ENV === 'production') {
  plugins.push(cssnano)
}

fs.readFile('src/styles.pcss', (err, css) => {

    if (err) throw err

    postcss(plugins)
      .process(css, { from: 'src/styles.pcss', to: 'dest/styles.css' })
      .then(result => {
          fs.writeFile('dest/styles.css', result.css)
          if ( result.map ) fs.writeFile('dest/styles.css.map', result.map)
      })
})
