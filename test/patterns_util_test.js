let assert = require("assert");
let lib = require("../src/patterns_util.js");

//--------generateLine------------
let generateLine = lib.generateLine;

assert.deepEqual(generateLine("*")(1),"*");
assert.deepEqual(generateLine("*")(0),"");
assert.deepEqual(generateLine("*")(5),"*****");

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

//-----------makeCounter--------------
let makeCounter = lib.makeCounter;
let countFromOne = makeCounter(1);

assert.deepEqual(countFromOne(),1);
assert.deepEqual(countFromOne(),2);
assert.deepEqual(countFromOne(),3);


//--------------createTopLineOfDiamond----------
let createTopLineOfDiamond = lib.createTopLineOfDiamond;

assert.deepEqual(createTopLineOfDiamond(1),["*"]);
assert.deepEqual(createTopLineOfDiamond(0),[]);
assert.deepEqual(createTopLineOfDiamond(5),["*"]);

//---------------createBottomLineOfDiamond-----------
let createBottomLineOfDiamond = lib.createBottomLineOfDiamond;

assert.deepEqual(createBottomLineOfDiamond(0),[]);
assert.deepEqual(createBottomLineOfDiamond(1),[]);
assert.deepEqual(createBottomLineOfDiamond(2),["*"]);

//-----------------createMiddleLineOfDiamond------------
let createMiddleLineOfDiamond = lib.createMiddleLineOfDiamond;

assert.deepEqual(createMiddleLineOfDiamond(2),[]);
assert.deepEqual(createMiddleLineOfDiamond(3),["* *"]);
assert.deepEqual(createMiddleLineOfDiamond(5),["*   *"]);

//------------------createUpperHalfOfDiamond-----------
let createUpperHalfOfDiamond = lib.createUpperHalfOfDiamond;

assert.deepEqual(createUpperHalfOfDiamond("*","*",1),[]);
assert.deepEqual(createUpperHalfOfDiamond("*","*",3),[]);
assert.deepEqual(createUpperHalfOfDiamond("*","*",5),["* *"]);

//------------------createLowerHalfOfDiamond-----------
let createLowerHalfOfDiamond = lib.createLowerHalfOfDiamond;

assert.deepEqual(createLowerHalfOfDiamond("*","*",1),[]);
assert.deepEqual(createLowerHalfOfDiamond("*","*",3),[]);
assert.deepEqual(createLowerHalfOfDiamond("*","*",5),["* *"]);

//------------------joinSpaces--------------------
let joinSpaces = lib.joinSpaces;

assert.deepEqual(joinSpaces(1)("*"),"*");
assert.deepEqual(joinSpaces(3)("*")," * ");
assert.deepEqual(joinSpaces(5)("*"),"  *  ");

//------------------reverseString---------------
let reverseString = lib.reverseString;

assert.deepEqual(reverseString(""),"");
assert.deepEqual(reverseString("123"),"321");
assert.deepEqual(reverseString("/ \\"),"\\ /");

console.log("all tests are passed!");
