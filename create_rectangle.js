let pattern = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

let createRectangle = require("./src/patterns_lib.js").createRectangle;

createRectangle(pattern,height,width)
