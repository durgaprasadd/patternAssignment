let pattern = process.argv[2];
let height = +process.argv[3];

let createDiamond = require("./src/patterns_lib.js").createDiamond;

console.log(createDiamond(pattern,height));
