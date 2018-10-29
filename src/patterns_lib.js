let lib = require("./patterns_util.js");

//-------------rectangle----------------
let generateLine = lib.generateLine;

const generateFilledRectangle = function(width,height){
  let line = generateLine(width)("*");
  let rectangle = new Array(height).fill(line).join("\n");
  return rectangle;
}

const generateRectangle = function(pattern,width,height){
  let lineNumber = height;
  let rectangle = "";
  let delimitor = "";
  if(pattern == "filled"){
    rectangle = generateFilledRectangle(width,height);
    return rectangle;
  }
  if(pattern != "empty"){
    while(height>0){
      rectangle=rectangle+delimitor+generateLine(width)("*");
      height--;
      delimitor="\n"
      if(height==0){
        break;
      }
      if(pattern=="alternating"){
        rectangle=rectangle+delimitor+generateLine(width)("-");
        height--;
      }
    }
  }else {
    while(height>0){
      if(lineNumber==height || height==1){
        rectangle=rectangle+delimitor+generateLine(width)("*");
      }else {
        rectangle= rectangle+delimitor+"*"+generateLine(width-2)(" ")+"*";
      }
      height--;
      delimitor="\n";
    }
  }
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
