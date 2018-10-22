let assert = require("assert");
let lib = require("../src/patterns_util.js");

//--------generateLine------------
let generateLine = lib.generateLine;

assert.deepEqual(generateLine(1,"*"),"*");
assert.deepEqual(generateLine(0,"*"),"");
assert.deepEqual(generateLine(5,"*"),"*****");

//--------spaceCreator-----------
let spaceCreator = lib.spaceCreator;

assert.deepEqual(spaceCreator(0),"");
assert.deepEqual(spaceCreator(1)," ");
assert.deepEqual(spaceCreator(5),"     ");

//--------filledPatternCreator--------
let filledPatternCreator = lib.filledPatternCreator;

assert.deepEqual(filledPatternCreator(1,"*"),"*");
assert.deepEqual(filledPatternCreator(0,"*"),"*");
assert.deepEqual(filledPatternCreator(2,"*")," *\n***\n *");

//---------hollowPatternCreator-------
let hollowPatternCreator = lib.hollowPatternCreator;

assert.deepEqual(hollowPatternCreator(0,"*"),"*");
assert.deepEqual(hollowPatternCreator(1,"*"),"*");
assert.deepEqual(hollowPatternCreator(2,"*")," *\n* *\n *");

//------------angledPatternCreator---------
let angledPatternCreator = lib.angledPatternCreator;

assert.deepEqual(angledPatternCreator(0,"*"),"*");
assert.deepEqual(angledPatternCreator(1,"*"),"*");
assert.deepEqual(angledPatternCreator(2,"*")," *\n* *\n *");
assert.deepEqual(angledPatternCreator(3,"*"),"  *\n / \\\n*   *\n \\ /\n  *");


//-------------leftAlignment--------------
let leftAlignment = lib.leftAlignment;

assert.deepEqual(leftAlignment(0,"*"),"");
assert.deepEqual(leftAlignment(1,"*"),"*");
assert.deepEqual(leftAlignment(2,"*"),"*\n**");

//-------------rightAlignment-------------
let rightAlignment = lib.rightAlignment;

assert.deepEqual(rightAlignment(0,"*"),"");
assert.deepEqual(rightAlignment(1,"*"),"*");
assert.deepEqual(rightAlignment(2,"*")," *\n**");

console.log("all tests are passed!");
