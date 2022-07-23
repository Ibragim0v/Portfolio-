const fs = require("fs");
const path = require("path");

const read = (dir) => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "..", "model", dir)));
};

const write = (dir, data) => {
  return fs.writeFileSync(
    path.join(__dirname, "..", "model", dir),
    JSON.stringify(data, null, 2)
  );
};

module.exports = {
  read,
  write,
};
