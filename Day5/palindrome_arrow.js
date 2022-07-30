let arr = [1,2,2,1];

let a = (arr) => {
    for(let i = 0;i < arr.length/2;i++){
        if(arr[i] !== arr[arr.length - i -1]){
            return('false');
        }
    }
    return('true');
}

console.log(a(arr));