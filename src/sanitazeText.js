function sanitazeText(text) {
  const allLines = text.split("\n");

  const filteredLines = allLines.filter((line) => {
    if (line.trim().length === 0) {
      return false;
    }
    return true;
  });

  const withoutNumbersAndLineStart = filteredLines.map((line) =>
    line.slice(4, line.length).trim()
  );

  return withoutNumbersAndLineStart;
}

module.exports = { sanitazeText };
