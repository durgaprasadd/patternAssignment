let lib = require("./patterns_util.js");

//-------------rectangle----------------
let generateLine = lib.generateLine;
let makeCycler = lib.makeCycler;

const generateFilledRectangle = function(width,height){
  let line = generateLine("*")(width);
  let rectangle = new Array(height).fill(line).join("\n");
  return rectangle;
}

const generateAlternateRectangle = function(width,height){
  let alternateLines = [generateLine("*")(width),generateLine("-")(width)];
  let noOfLines = new Array(height).fill(1);
  let rectangle = noOfLines.map(makeCycler(alternateLines));
  return rectangle.join("\n");
}

const hollowLinesGenerator = function(height,width){
  let noOfHollowLines = Math.max(0,height-2);
  let noOfHollowSpaces = Math.max(0,width-2);
  let leftBorder = generateLine("*")( 1 % (width+1))
  let rightBorder = generateLine("*")( 1 % width || 0 );
  let hollowLine = leftBorder+spaceCreator(noOfHollowSpaces)+rightBorder;
  let hollowLines = new Array(noOfHollowLines).fill(hollowLine);
  return hollowLines;
}

const generateHollowRectangle = function(width,height){
  let line = generateLine("*")(width);
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
let generateOddSeries = lib.generateOddSeries;

const countSpaces = function(limit){
  return function(element){
    return (limit-element)/2;
  }
}

const zip = function(list){
  let index=0;
  return function(element){
    return list[index++]+element;
  }
}

const filledPatternCreator = function(height){
  height = Math.ceil(height/2);
  let ones = new Array(height).fill(1);
  let oddSeries = ones.reduce(generateOddSeries,[]);
  let reversedSeries = oddSeries.slice(0,oddSeries.length-1).reverse();
  let diamondSeries = oddSeries.concat(reversedSeries);
  let noOfSpaces = diamondSeries.map(countSpaces(oddSeries[oddSeries.length-1]));
  let diamondSpaces = noOfSpaces.map(spaceCreator);
  let diamondStars = diamondSeries.map(generateLine("*"));
  return diamondStars.map(zip(diamondSpaces)).join("\n");
}


const hollowPatternCreator = function(height,symbols){
  let noOfLines = Math.ceil(height/2);
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


const angledPatternCreator = function(height,symbols){
  let noOfLines = Math.floor(height/2)+1;
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
  let diamondFunctions = {filled:filledPatternCreator, hollow:hollowPatternCreator,
    angled:angledPatternCreator}
  let diamond = diamondFunctions[pattern](height,"*");
  return diamond;
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
  let triangleFunctions = {right:rightAlignment, left:leftAlignment};
  let triangle = triangleFunctions[pattern](height);
  return triangle;
}

module.exports = { generateFilledRectangle, generateAlternateRectangle, generateHollowRectangle,
  generateDiamond, generateTriangle, generateRectangle, leftAlignment, rightAlignment,
  filledPatternCreator, hollowPatternCreator, angledPatternCreator
}
