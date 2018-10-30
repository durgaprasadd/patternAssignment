let assert = require("assert");
let lib = require("../src/patterns_util.js");

//--------generateLine------------
let generateLine = lib.generateLine;

assert.deepEqual(generateLine(1)("*"),"*");
assert.deepEqual(generateLine(0)("*"),"");
assert.deepEqual(generateLine(5)("*"),"*****");

//--------spaceCreator-----------
let spaceCreator = lib.spaceCreator;

assert.deepEqual(spaceCreator(0),"");
assert.deepEqual(spaceCreator(1)," ");
assert.deepEqual(spaceCreator(5),"     ");

console.log("all tests are passed!");
