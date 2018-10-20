let pattern = process.argv[2];
let height = +process.argv[3];

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



if(pattern=="filled"){
  height=Math.ceil(height/2);
  console.log(filledPatternCreator(height,"*"));
}

if(pattern=="hollow"){
  height=Math.ceil(height/2);
  console.log(hollowPatternCreator(height,"*"));
}

if(pattern=="angled"){
  height=Math.floor(height/2)+1
  console.log(angledPatternCreator(height,"*"));
}
