
let pattern = process.argv[2];
let height = +process.argv[3];

let createTriangle = require("./src/patterns_lib.js").createTriangle;

console.log(createTriangle(pattern,height));
