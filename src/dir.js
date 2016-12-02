const fs = require('fs');

const relativePath = require('path');

const filePath = process.cwd();

function readFiles(path) {
  fs.readdir(path, (err, files) => {
    if (err) throw new Error(err);
    files.forEach(file => {
      const fPath = relativePath.resolve(path, file);
      fs.stat(fPath, (error, stats) => {
        if (error) throw new Error(err);
        if (stats.isDirectory())
          readFiles(fPath);
        else
         console.log(file);
      });
    });
  });
}

readFiles(filePath);
