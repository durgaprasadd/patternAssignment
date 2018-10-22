
let pattern = process.argv[2];
let height = +process.argv[3];

let generateTriangle = require("./src/patterns_lib.js").generateTriangle;

console.log(generateTriangle(pattern,height));
