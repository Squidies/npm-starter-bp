const fs = require('fs')
const path = require('path')
const pug = require('pug')



fs.readdir('src/pug', function(err, files) {
  for (var i = files.length - 1; i >= 0; i--) {
    let file = files[i]
    let file_path = 'src/pug/' + file
    fs.stat(file_path, function(error, stat) {
      if(stat.isFile()) {
        // let outfile = './'+file.slice(0, -4)+'.html'
        let outfile = path.parse(file).name + '.html'
        let html = pug.renderFile(file_path, {pretty: true})
        fs.writeFileSync(outfile, html);
        console.log('Processed: '+file_path+'\n       --> '+outfile)
      }
    })
  }
})


// let html = pug.renderFile('src/pug/index.pug', {pretty: true})
// fs.writeFileSync('index.html', html);
