const fs = require("fs").promises;

(async () => {
  const packageJSON = require('./internal/package.json');
  packageJSON.name = "@internal/pkg";
  await fs.writeFile("./internal/package.json", JSON.stringify(packageJSON, null, 2), "utf-8")
})()