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

//----------generateOddSeries--------
let generateOddSeries = lib.generateOddSeries;

assert.deepEqual([].reduce(generateOddSeries,[]),[]);
assert.deepEqual([1].reduce(generateOddSeries,[]),[1]);
assert.deepEqual([1,1].reduce(generateOddSeries,[]),[1,3]);
console.log("all tests are passed!");
