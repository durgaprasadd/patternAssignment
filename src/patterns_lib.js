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
let createTopLineOfDiamond = lib.createTopLineOfDiamond;
let createMiddleLineOfDiamond = lib.createMiddleLineOfDiamond;
let createBottomLineOfDiamond = lib.createBottomLineOfDiamond;
let createUpperHalf = lib.createUpperHalfOfDiamond;
let createLowerHalf = lib.createLowerHalfOfDiamond;
let joinSpaces = lib.joinSpaces;

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

const hollowPatternCreator = function(height){
  height = Math.ceil(height/2)*2-1;
  let topline = createTopLineOfDiamond(height);
  let middleLine = createMiddleLineOfDiamond(height);
  let bottomline = createBottomLineOfDiamond(height);
  let upperHalf = createUpperHalf("*","*",height);
  let lowerHalf = createLowerHalf("*","*",height);
  let diamond = topline.concat(upperHalf,middleLine,lowerHalf,bottomline);
  return diamond.map(joinSpaces(height)).join("\n");
}

const angledPatternCreator = function(height){
  height = Math.ceil(height/2)*2-1;
  let topline = createTopLineOfDiamond(height);
  let middleLine = createMiddleLineOfDiamond(height);
  let bottomline = createBottomLineOfDiamond(height);
  let upperHalf = createUpperHalf("/","\\",height);
  let lowerHalf = createLowerHalf("/","\\",height);
  let diamond = topline.concat(upperHalf,middleLine,lowerHalf,bottomline);
  return diamond.map(joinSpaces(height)).join("\n");
}
  

const generateDiamond = function(diamondDetails){
  let pattern = diamondDetails.patternType;
  let height = diamondDetails.width;
  let diamondFunctions = {filled:filledPatternCreator, hollow:hollowPatternCreator,
    angled:angledPatternCreator}
  let diamond = diamondFunctions[pattern](height);
  return diamond;
}


//--------------triangle-----------
let makeCounter = lib.makeCounter;
let createTriangle = lib.createTriangle;

const leftAlignment = function(height){
  let ones = new Array(height).fill(1);
  let series = ones.map(makeCounter(1));
  let triangle = series.map(createTriangle(height));
  return triangle.join("\n");
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
