let assert = require("assert");
let lib = require("../src/patterns_lib.js");

//----------rectangle--------------
let generateRectangle = lib.generateRectangle;
let expectedOutput = "**\n**";
assert.deepEqual(generateRectangle("filled",2,2),expectedOutput);
expectedOutput = "***\n***";
assert.deepEqual(generateRectangle("filled",3,2),expectedOutput);
expectedOutput = "**\n**\n**";
assert.deepEqual(generateRectangle("filled",2,3),expectedOutput);
expectedOutput = "**\n--";
assert.deepEqual(generateRectangle("alternating",2,2),expectedOutput);
expectedOutput = "***\n---";
assert.deepEqual(generateRectangle("alternating",3,2),expectedOutput);
expectedOutput = "**\n--\n**";
assert.deepEqual(generateRectangle("alternating",2,3),expectedOutput);
expectedOutput = "**\n**";
assert.deepEqual(generateRectangle("empty",2,2),expectedOutput);
expectedOutput = "***\n***";
assert.deepEqual(generateRectangle("empty",3,2),expectedOutput);
expectedOutput = "**\n**\n**"
assert.deepEqual(generateRectangle("empty",2,3),expectedOutput);
expectedOutput = new Array(7).fill(new Array(20).fill("*").join("")).join("\n");
assert.deepEqual(generateRectangle("filled",20,7),expectedOutput);
expectedOutput = "********************\n--------------------\n********************\n--------------------\n********************\n--------------------\n********************";
assert.deepEqual(generateRectangle("alternating",20,7),expectedOutput);
expectedOutput = "********************\n*                  *\n*                  *\n*                  *\n*                  *\n*                  *\n********************";
assert.deepEqual(generateRectangle("empty",20,7),expectedOutput);


//---------------diamond-------------
let generateDiamond = lib.generateDiamond;
expectedOutput = "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *"
assert.deepEqual(generateDiamond("filled",10),expectedOutput);
expectedOutput = "  *\n ***\n*****\n ***\n  *";
assert.deepEqual(generateDiamond("filled",5),expectedOutput);
expectedOutput = "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *"
assert.deepEqual(generateDiamond("hollow",10),expectedOutput);
expectedOutput = "  *\n * *\n*   *\n * *\n  *";
assert.deepEqual(generateDiamond("hollow",5),expectedOutput);
expectedOutput = "     *\n    / \\\n   /   \\\n  /     \\\n /       \\\n*         *\n \\       /\n  \\     /\n   \\   /\n    \\ /\n     *"
assert.deepEqual(generateDiamond("angled",10),expectedOutput);
expectedOutput ="  *\n / \\\n*   *\n \\ /\n  *";
assert.deepEqual(generateDiamond("angled",5),expectedOutput);


//-----------------triangle------------
let generateTriangle = lib.generateTriangle;
expectedOutput = "*\n**";
assert.deepEqual(generateTriangle("left",2),expectedOutput);
expectedOutput = "*\n**\n***\n****\n*****";
assert.deepEqual(generateTriangle("left",5),expectedOutput);
expectedOutput = " *\n**"
assert.deepEqual(generateTriangle("right",2),expectedOutput);
expectedOutput = "    *\n   **\n  ***\n ****\n*****"
assert.deepEqual(generateTriangle("right",5),expectedOutput);


console.log("all tests are passed!");
