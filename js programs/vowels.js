function vowels(str){
    let count=0;
    let arr=str.split("");
    for (let i=0;i<arr.length;i++){
        switch (arr[i]){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;    
                
        }
    }
    return count;
    
}
const result=prompt("enter the word:");
const output=vowels(result);
console.log(output);
