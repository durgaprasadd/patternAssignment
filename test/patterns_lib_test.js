let assert = require("assert");
let lib = require("../src/patterns_lib.js");

//----------rectangle--------------
let generateRectangle = lib.generateRectangle;
let expectedOutput = "**\n**";
assert.deepEqual(generateRectangle({patternType:"filled",width:2,height:2}),expectedOutput);
expectedOutput = "***\n***";
assert.deepEqual(generateRectangle({patternType:"filled",width:3,height:2}),expectedOutput);
expectedOutput = "**\n**\n**";
assert.deepEqual(generateRectangle({patternType:"filled",width:2,height:3}),expectedOutput);
expectedOutput = "**\n--";
assert.deepEqual(generateRectangle({patternType:"alternating",width:2,height:2}),expectedOutput);
expectedOutput = "***\n---";
assert.deepEqual(generateRectangle({patternType:"alternating",width:3,height:2}),expectedOutput);
expectedOutput = "**\n--\n**";
assert.deepEqual(generateRectangle({patternType:"alternating",width:2,height:3}),expectedOutput);
expectedOutput = "**\n**";
assert.deepEqual(generateRectangle({patternType:"empty",width:2,height:2}),expectedOutput);
expectedOutput = "***\n***";
assert.deepEqual(generateRectangle({patternType:"empty",width:3,height:2}),expectedOutput);
expectedOutput = "**\n**\n**"
assert.deepEqual(generateRectangle({patternType:"empty",width:2,height:3}),expectedOutput);
expectedOutput = new Array(7).fill(new Array(20).fill("*").join("")).join("\n");
assert.deepEqual(generateRectangle({patternType:"filled",width:20,height:7}),expectedOutput);
expectedOutput = "********************\n--------------------\n********************\n--------------------\n********************\n--------------------\n********************";
assert.deepEqual(generateRectangle({patternType:"alternating",width:20,height:7}),expectedOutput);
expectedOutput = "********************\n*                  *\n*                  *\n*                  *\n*                  *\n*                  *\n********************";
assert.deepEqual(generateRectangle({patternType:"empty",width:20,height:7}),expectedOutput);


//---------------diamond-------------
let generateDiamond = lib.generateDiamond;
expectedOutput = "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *"
assert.deepEqual(generateDiamond({patternType:"filled",width:10}),expectedOutput);
expectedOutput = "  *\n ***\n*****\n ***\n  *";
assert.deepEqual(generateDiamond({patternType:"filled",width:5}),expectedOutput);
expectedOutput = "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *"
assert.deepEqual(generateDiamond({patternType:"hollow",width:10}),expectedOutput);
expectedOutput = "  *\n * *\n*   *\n * *\n  *";
assert.deepEqual(generateDiamond({patternType:"hollow",width:5}),expectedOutput);
expectedOutput = "     *\n    / \\\n   /   \\\n  /     \\\n /       \\\n*         *\n \\       /\n  \\     /\n   \\   /\n    \\ /\n     *"
assert.deepEqual(generateDiamond({patternType:"angled",width:10}),expectedOutput);
expectedOutput ="  *\n / \\\n*   *\n \\ /\n  *";
assert.deepEqual(generateDiamond({patternType:"angled",width:5}),expectedOutput);


//-----------------triangle------------
let generateTriangle = lib.generateTriangle;
expectedOutput = "*\n**";
assert.deepEqual(generateTriangle({patternType:"left",width:2}),expectedOutput);
expectedOutput = "*\n**\n***\n****\n*****";
assert.deepEqual(generateTriangle({patternType:"left",width:5}),expectedOutput);
expectedOutput = " *\n**"
assert.deepEqual(generateTriangle({patternType:"right",width:2}),expectedOutput);
expectedOutput = "    *\n   **\n  ***\n ****\n*****"
assert.deepEqual(generateTriangle({patternType:"right",width:5}),expectedOutput);

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
