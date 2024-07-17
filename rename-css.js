const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'build', 'static', 'css');

fs.readdirSync(cssDir).forEach((file) => {
  if (file.startsWith('main.') && file.endsWith('.css')) {
    const oldPath = path.join(cssDir, file);
    const newPath = path.join(cssDir, 'main.css');
    fs.renameSync(oldPath, newPath);
  }
});
