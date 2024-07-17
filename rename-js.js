const fs = require("fs");
const path = require("path");

const jsDir = path.join(__dirname, "build", "static", "js");

fs.readdirSync(jsDir).forEach((file) => {
  if (file.startsWith("main.") && file.endsWith(".js")) {
    const oldPath = path.join(jsDir, file);
    const newPath = path.join(jsDir, "main.js");
    fs.renameSync(oldPath, newPath);
  }
});
