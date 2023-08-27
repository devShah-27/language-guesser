const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

let userInput = process.argv[2] || "Hello World";
let input = franc(userInput);

if (input === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    let language = langs.where('3', input);
    console.log(language.name);
};