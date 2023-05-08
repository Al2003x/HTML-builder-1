const fs = require('fs');
const path = require('path');
const srcFiles = path.join(__dirname, 'styles');
const distFiles = path.join(__dirname, 'project-dist');

fs.readdir(srcFiles, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  let styleData = '';
  files.forEach((item) => {
    let file = path.join(srcFiles, item.name);
    if (item.isFile() && path.parse(file).ext === '.css') {
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) console.log(err);
        styleData += data;
        fs.writeFile(path.join(distFiles, 'bundle.css'), styleData, (err) => {
          if (err) console.log(err);
        });
      });
    }
  });
});