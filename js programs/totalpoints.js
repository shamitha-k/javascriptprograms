function ProcessingInstruction(game){
  let totalpoints=0;
  for(let i=0;i<game.length;i++){
    const value=game[i];
    const parts=value.split(":");
    const x=parts[0];
    const y=parts[1];
    if(x>y){
      totalpoints=totalpoints+3;

    }else if(x===y){
      totalpoints+=1;


    }
  }
  return totalpoints;


}