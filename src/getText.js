const fs = require("fs");
const { sanitazeText } = require("./sanitazeText");

function getText(dirname) {
  const text = fs.readFileSync(dirname, "utf-8");

  return sanitazeText(text);
}

module.exports = {
  getText,
};
