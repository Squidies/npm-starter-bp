console.log('-- run postinstall script')
const mkdirp = require('mkdirp')
const touch = require("touch")

// create destination files/folders
mkdirp('dest/img')
touch('dest/app.js')
touch('dest/styles.css')
