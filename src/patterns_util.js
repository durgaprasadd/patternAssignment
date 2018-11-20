const readUserInput = function(userInput){
  let patternType = userInput[2];
  let width = +userInput[3];
  let height = +userInput[4];
  return {patternType:patternType, width:width, height:height};
}

const generateLine = function(symbol){
  return function(widthOfLine){
    let line=new Array(widthOfLine).fill(symbol).join("");
    return line;
  }
}

const spaceCreator = function(range){
  let Spaces = new Array(range).fill(" ").join("");
  return Spaces;
}

const makeCycler = function(list){
  let index=0;
  let result = list.slice();
  return function(){
    return result[(index++) % result.length];
  }
}

const generateOddSeries = function(series,element){
  series.push(2*series.length+element);
  return series;
}

const makeCounter = function(count){
  return function(){
    return count++;
  }
}

const createTopLineOfDiamond = function(height){
  if(height>0){
    return ["*"];
  }
  return [];
}

const createBottomLineOfDiamond = function(height){
  if(height>1){
    return ["*"];
  }
  return [];
}

const createMiddleLineOfDiamond = function(height){
  if(height>2){
    return ["*"+spaceCreator(height-2)+"*"];
  }
  return [];
}

const joinSpaces = function(height){
  return function(element){
    return spaceCreator((height-element.length)/2)+element+spaceCreator((height-element.length)/2);
  }
}

const concatfirstAndLastSymbols = function(firstSymbol,lastSymbol){
  return function(width){
    return firstSymbol+spaceCreator(width)+lastSymbol;
  }
}

const createUpperHalfOfDiamond = function(firstSymbol,lastSymbol,height){
  let width = Math.max(0,(height-3)/2);
  let ones = new Array(width).fill(1);
  let oddSeries = ones.reduce(generateOddSeries,[]);
  let upperHalf = oddSeries.map(concatfirstAndLastSymbols(firstSymbol,lastSymbol));
  return upperHalf;
}

const reverseString = function(string){
  return string.split("").reverse().join("");
}

const createLowerHalfOfDiamond = function(firstSymbol,lastSymbol,height){
  return createUpperHalfOfDiamond(firstSymbol,lastSymbol,height).reverse().map(reverseString);
}

const createTriangle = function(height){
  return function(element){
    return generateLine("*")(element)+spaceCreator(height-element);
  }
}



module.exports = { 
  generateLine, spaceCreator, makeCycler, readUserInput, generateOddSeries, createTopLineOfDiamond, createBottomLineOfDiamond,
  createUpperHalfOfDiamond, createLowerHalfOfDiamond, createMiddleLineOfDiamond, joinSpaces, reverseString, makeCounter,
  createTriangle
};

