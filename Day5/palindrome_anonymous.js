let arr = [1,11,343,200,798,80108,8008,999,7171,700007];

let a = function(arr) {
    let res = '';
    let ans = '';
    
    for(let i = 0;i < arr.length;i++){
        res += arr[i];
        var count = 0;
        for(let j = 0;j < res.length;j++){
            if(res[j] === res[((res.length - 1) - j)]){
                count++;
            }
        }
        if(count === res.length){
            ans += res+" ";
        }
        res = '';
    }
    return ans;
}

console.log(a(arr));