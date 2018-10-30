const readUserInput = function(userInput){
  let patternType = userInput[2];
  let width = +userInput[3];
  let height = +userInput[4];
  return {patternType:patternType, width:width, height:height};
}

const generateLine = function(widthOfLine){
  return function(symbol){
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


module.exports = { 
  generateLine, spaceCreator, makeCycler, filledPatternCreator,
  hollowPatternCreator, leftAlignment, rightAlignment, angledPatternCreator,
  readUserInput
};

