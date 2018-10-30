let readUserInput = require("./src/patterns_util.js").readUserInput;
let generateRectangle = require("./src/patterns_lib.js").generateRectangle;

let rectangleDetails = readUserInput(process.argv);

console.log(generateRectangle(rectangleDetails));
