function solution(number){
    if(number%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
const num=prompt("enter the number:");
const result=solution(num);
console.log(result);
