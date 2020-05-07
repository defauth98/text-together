const sbd = require("sbd");
const { joinSetences } = require("./src/joinSetences");
const { getText } = require("./src/getText.js");

const englishText = getText("./texts/textEnglish.txt");
const portugueseText = getText("./texts/textPortuguese.txt");

function getOnlySetences(textArray) {
  const text = textArray.reduce((previus, current) => `${previus}${current}`);

  return sbd.sentences(text);
}

const englishSetences = getOnlySetences(englishText);
const portugueseSetences = getOnlySetences(portugueseText);

console.log("Texto em ingles:")
console.log(englishSetences.toString())

console.log('\n\n\n')
console.log("Frase linha a linha")
if (englishSetences.length === portugueseSetences.length) {
  joinSetences(englishSetences, portugueseSetences);
} else {
  console.log("Tamanhos diferentes!!");
  console.log(`Ingles: ${englishSetences.length}`);
  console.log(`Portugues: ${portugueseSetences.length}`);
}
