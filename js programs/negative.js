function negative(num){
  if (num<0){
    return num;
  }else{
    return num*-1;
  }
}
const a=prompt("enter the number:");
const b=negative(a);
document.write(b);