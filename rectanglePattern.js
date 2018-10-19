let pattern = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];
let lineNumber=height;

const line = function(widthOfLine,delimator){
  let rectangleLine="";
  while(widthOfLine > 0){
    rectangleLine=rectangleLine+delimator;
    widthOfLine--;
  }
  return rectangleLine;
}

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
