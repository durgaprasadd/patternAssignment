let pattern = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

let generateRectangle = require("./src/patterns_lib.js").generateRectangle;

console.log(generateRectangle(pattern,width,height));
