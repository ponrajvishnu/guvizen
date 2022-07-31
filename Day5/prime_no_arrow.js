//let arr = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let arr = [1,2,3,4,5,6,7,8,9,11];

let a = (arr) => {
    var res = '';
    for(let i = 0;i < arr.length;i++){
        var count = 0;

        for(let j = 1;j <= arr[i];j++){
            if(arr[i] % j === 0){
                count++;
            }
        }
        console.log(count);
        if(count == 2)
        {
            res += arr[i]+" ";
        }
    }
    return res;
}

console.log(a(arr));