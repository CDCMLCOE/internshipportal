const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;
walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content.replace(/ \*(<\/label>|<\/span>)/g, ' <span className="text-red-500 font-bold">*</span>$1');
    if (content !== modified) {
      fs.writeFileSync(filePath, modified);
      console.log('Modified ' + filePath);
      modifiedCount++;
    }
  }
});
console.log('Modified ' + modifiedCount + ' files.');
