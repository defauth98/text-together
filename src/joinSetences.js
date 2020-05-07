const fs = require('fs')

function joinSetences(englishSetencesArray, portugueseSetencesArray) {
  const newSetencesArray = [];

  for (let index = 0; index < englishSetencesArray.length; index++) {
    newSetencesArray[index] = [
      englishSetencesArray[index],
      portugueseSetencesArray[index],
    ];
  }
  let arrayOfSetencesEnglishAndProtuguese = newSetencesArray.map(
    (element) => ` ${element[0]}\n ${element[1]}\n\n`
  );

  arrayOfSetencesEnglishAndProtuguese = arrayOfSetencesEnglishAndProtuguese.reduce(
    (previus, current) => `${previus + current}`
  );

  console.log(arrayOfSetencesEnglishAndProtuguese.toString());
  fs.writeFileSync("final.txt", arrayOfSetencesEnglishAndProtuguese, "utf8");
}

module.exports = { joinSetences };
