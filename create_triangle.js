let readUserInput = require("./src/patterns_util.js").readUserInput;
let generateTriangle = require("./src/patterns_lib.js").generateTriangle;

let triangleDetails = readUserInput(process.argv);
console.log(generateTriangle(triangleDetails));
