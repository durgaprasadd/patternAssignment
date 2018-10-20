let pattern = process.argv[2];
let height = +process.argv[3];

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

const spaceCreator = function(limit){
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
    noOfSpaces=spaceCreator(noOfLines-1);
    line=line+delimiter+noOfSpaces+characters;
    delimiter="\n";
    noOfLines--;
  }
  return line;
}

if(pattern=="left"){
  console.log(leftAlignment(height));
}

if(pattern=="right"){
  console.log(rightAlignment(height));
}
