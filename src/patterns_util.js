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


module.exports = { 
  generateLine, spaceCreator, makeCycler, readUserInput
};

