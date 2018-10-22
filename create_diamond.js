let pattern = process.argv[2];
let height = +process.argv[3];

let generateDiamond = require("./src/patterns_lib.js").generateDiamond;

console.log(generateDiamond(pattern,height));
