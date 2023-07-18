function add(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}
const result=prompt("enter the number:");
const output=add(result);
console.log(output);