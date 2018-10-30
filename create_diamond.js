let readUserInput = require("./src/patterns_util.js").readUserInput;
let generateDiamond = require("./src/patterns_lib.js").generateDiamond;

let diamondDetails = readUserInput(process.argv);
console.log(generateDiamond(diamondDetails));
