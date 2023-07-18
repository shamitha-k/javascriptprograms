function solution(str){
 


  let arr=str.split("");
  let reverse=arr.reverse();
  let final=reverse.join("");
  return final;

}
const string=prompt("enter a string:");
const result=solution(string);
console.log(result);