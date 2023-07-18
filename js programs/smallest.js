const arr=[1,2,-3,5]
min=arr[0];
for(var i=0; i<arr.length;i++){
    if(arr[i]<min){min =arr[i];}
}
console.log("min:"+min);