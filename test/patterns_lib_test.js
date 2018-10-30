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


console.log("all tests are passed!");
