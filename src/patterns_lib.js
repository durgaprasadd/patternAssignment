//-------------rectangle----------------
const line = function(widthOfLine,delimator){
  let rectangleLine="";
  while(widthOfLine > 0){
    rectangleLine=rectangleLine+delimator;
    widthOfLine--;
  }
  return rectangleLine;
}
const createRectangle = function(pattern,height,width){
  let lineNumber = height;
  if(pattern != "empty"){
    while(height>0){
      console.log(line(width,"*"));
      height--;
      if(height==0){
        process.exit();
      }
      if(pattern=="alternating"){
        console.log(line(width,"-"));
        height--;
      }
    }
  }else {
    while(height>0){
      if(lineNumber==height || height==1){
        console.log(line(width,"*"));
      }else {
        console.log("*"+line(width-2," ")+"*");
      }
      height--;
    }
  }
}

exports.createRectangle = createRectangle;

//--------------diamond------------
const spaceCreator = function(limit){
  let noOfSpaces = "";
  while(limit>1){
    noOfSpaces=noOfSpaces+" ";
    limit--;
  }
  return noOfSpaces;
}

const filledPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart ="";
  let lowerPart=upperPart;
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines);
    lowerPart = spaces+symbols+delimiter+lowerPart;
    upperPart=upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    symbols="*"+symbols+"*";
    noOfLines--;
  }
  upperPart=upperPart+delimiter+symbols+delimiter+lowerPart;
  return upperPart;
}

const hollowPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart ="";
  let lowerPart=upperPart;
  let hollowSpace=" ";
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines);
    lowerPart = spaces+symbols+delimiter+lowerPart;
    upperPart = upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    symbols="*"+hollowSpace+"*";
    hollowSpace=" "+hollowSpace+" ";
    noOfLines--;
  }
  upperPart=upperPart+delimiter+symbols+delimiter+lowerPart;
  return upperPart;
}

const angledPatternCreator = function(noOfLines,symbols){
  let delimiter="";
  let upperPart = "";
  let lowerPart=upperPart;
  let middleLine = "*";
  let hollowSpace=" ";
  let reverseSymbols="*";
  while(noOfLines>1){
    spaces = spaceCreator(noOfLines); 
    lowerPart = spaces+reverseSymbols+delimiter+lowerPart;
    upperPart = upperPart+delimiter+spaces+symbols;
    delimiter="\n";
    middleLine="*"+hollowSpace+"*";
    symbols="/"+hollowSpace+"\\";
    reverseSymbols="\\"+hollowSpace+"/"
    hollowSpace=" "+hollowSpace+" ";
    noOfLines--;
  }
  upperPart=upperPart+delimiter+middleLine+delimiter+lowerPart;
  return upperPart;
}


const createDiamond = function(pattern,height){
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

exports.createDiamond = createDiamond;

//--------------triangle-----------

const leftAlignment = function(noOfLines){
  let line="";
  let delimiter="";
  let characters="";
  while(noOfLines>0){
    characters=characters+"*";
    line=line+delimiter+characters;
    delimiter="\n";
    noOfLines--;
  }
  return line;
}

const spaceGenerator = function(limit){
  let spaces="";
  while(limit>0){
    spaces=spaces+" ";
    limit--;
  }
  return spaces;
}

const rightAlignment = function(noOfLines){
  let line="";
  let delimiter="";
  let characters="";
  while(noOfLines>0){
    characters=characters+"*";
    noOfSpaces=spaceGenerator(noOfLines-1);
    line=line+delimiter+noOfSpaces+characters;
    delimiter="\n";
    noOfLines--;
  }
  return line;
}

const createTriangle = function(pattern,height){
  if(pattern=="left"){
    return (leftAlignment(height));
  }

  if(pattern=="right"){
    return (rightAlignment(height));
  }
}

exports.createTriangle = createTriangle;
