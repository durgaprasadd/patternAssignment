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


const generateRectangle = function(rectangleDetails){
  let {patternType,width,height} = rectangleDetails;
  let rectangleFunctions = { filled:generateFilledRectangle, alternating:generateAlternateRectangle,
    empty:generateHollowRectangle}
  let rectangle = rectangleFunctions[patternType](width,height);
  return rectangle;
}


//--------------diamond------------
let spaceCreator = lib.spaceCreator;

const filledPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart ="";
  let result = "";
  let lowerPart=upperPart;
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines-1);
    lowerPart = spaces+symbols+delimiter+lowerPart;
    upperPart=upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    symbols="*"+symbols+"*";
    noOfLines--;
  }
  result=upperPart+delimiter+symbols+delimiter+lowerPart;
  return result;
}

const hollowPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart ="";
  let lowerPart=upperPart;
  let hollowSpace=" ";
  let result="";
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines-1);
    lowerPart = spaces+symbols+delimiter+lowerPart;
    upperPart = upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    symbols="*"+hollowSpace+"*";
    hollowSpace=" "+hollowSpace+" ";
    noOfLines--;
  }
  result=upperPart+delimiter+symbols+delimiter+lowerPart;
  return result;
}


const angledPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart = "";
  let result = "";
  let lowerPart=upperPart;
  let middleLine = "*";
  let hollowSpace=" ";
  let reverseSymbols="*";
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines-1); 
    lowerPart = spaces+reverseSymbols+delimiter+lowerPart;
    upperPart = upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    middleLine="*"+hollowSpace+"*";
    symbols="/"+hollowSpace+"\\";
    reverseSymbols="\\"+hollowSpace+"/"
    hollowSpace=" "+hollowSpace+" ";
    noOfLines--;
  }
  result=upperPart+delimiter+middleLine+delimiter+lowerPart;
  return result;
}


const generateDiamond = function(diamondDetails){
  let pattern = diamondDetails.patternType;
  let height = diamondDetails.width;
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


//--------------triangle-----------

const leftAlignment = function(noOfLines){
  let triangle="";
  let delimiter="";
  let characters="";
  while(noOfLines>0){
    characters=characters+"*";
    triangle=triangle+delimiter+characters;
    delimiter="\n";
    noOfLines--;
  }
  return triangle;
}

const rightAlignment = function(noOfLines){
  let triangle="";
  let delimiter="";
  let characters="";
  while(noOfLines>0){
    characters=characters+"*";
    noOfSpaces=spaceCreator(noOfLines-1);
    triangle=triangle+delimiter+noOfSpaces+characters;
    delimiter="\n";
    noOfLines--;
  }
  return triangle;
}


const generateTriangle = function(triangleDetails){
  let pattern = triangleDetails.patternType;
  let height = triangleDetails.width;
  if(pattern=="left"){
    return (leftAlignment(height));
  }

  if(pattern=="right"){
    return (rightAlignment(height));
  }
}

module.exports = { generateFilledRectangle, generateAlternateRectangle, generateHollowRectangle,
  generateDiamond, generateTriangle, generateRectangle, leftAlignment, rightAlignment,
  filledPatternCreator, hollowPatternCreator, angledPatternCreator
}
