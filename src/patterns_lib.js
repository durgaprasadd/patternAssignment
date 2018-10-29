let lib = require("./patterns_util.js");

//-------------rectangle----------------
let generateLine = lib.generateLine;
let makeCycler = lib.makeCycler;

const generateFilledRectangle = function(width,height){
  let line = generateLine(width)("*");
  let rectangle = new Array(height).fill(line).join("\n");
  return rectangle;
}

const generateAlternateRectangle = function(width,height){
  let alternateSymbols = ["*","-"];
  let alternateLines = alternateSymbols.map(generateLine(width));
  let noOfLines = new Array(height).fill(1);
  let rectangle = noOfLines.map(makeCycler(alternateLines));
  return rectangle.join("\n");
}

const hollowLinesGenerator = function(height,width){
  let noOfHollowLines = Math.max(0,height-2);
  let noOfHollowSpaces = Math.max(0,width-2);
  let leftBorder = generateLine( 1 % (width+1))("*");
  let rightBorder = generateLine( 1 % width || 0 )("*");
  let hollowLine = leftBorder+spaceCreator(noOfHollowSpaces)+rightBorder;
  let hollowLines = new Array(noOfHollowLines).fill(hollowLine);
  return hollowLines;
}

const generateHollowRectangle = function(width,height){
  let line = generateLine(width)("*");
  let noOfTopLines = 1 % (height+1);
  let topLine = new Array(noOfTopLines).fill(line);

  let noOfBottomLines = 1%height || 0;
  let bottomLine = new Array(noOfBottomLines).fill(line);

  let middlePart = hollowLinesGenerator(height,width); 

  let rectangle = topLine.concat(middlePart,bottomLine);

  return rectangle.join("\n");
}


const generateRectangle = function(pattern,width,height){
  let lineNumber = height;
  let rectangle = "";
  let delimitor = "";
  if(pattern == "filled"){
    rectangle = generateFilledRectangle(width,height);
    return rectangle;
  }
  if(pattern=="alternating"){
    rectangle=generateAlternateRectangle(width,height);
    return rectangle;
  }
  rectangle = generateHollowRectangle(width,height);
  return rectangle;
}

exports.generateRectangle = generateRectangle;

//--------------diamond------------
let spaceCreator = lib.spaceCreator;
let filledPatternCreator = lib.filledPatternCreator;
let hollowPatternCreator = lib.hollowPatternCreator;
let angledPatternCreator = lib.angledPatternCreator;


const generateDiamond = function(pattern,height){
  if(pattern=="filled"){
    height=Math.ceil(height/2);
    return (filledPatternCreator(height,"*"));
  }

  if(pattern=="hollow"){
    height=Math.ceil(height/2);
    return (hollowPatternCreator(height,"*"));
  }

  if(pattern=="angled"){
    height=Math.floor(height/2)+1
    return (angledPatternCreator(height,"*"));
  }
}

exports.generateDiamond = generateDiamond;

//--------------triangle-----------
let leftAlignment = lib.leftAlignment;
let spaceGenerator = lib.spaceCreator;
let rightAlignment = lib.rightAlignment;


const generateTriangle = function(pattern,height){
  if(pattern=="left"){
    return (leftAlignment(height));
  }

  if(pattern=="right"){
    return (rightAlignment(height));
  }
}

exports.generateTriangle = generateTriangle;
