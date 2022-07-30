let arr = [1,2,3,4,5];

let a = function(val) {
    for(let i = 0;i < val.length;i++){
        // console.log(val[i]);
        let ans = parseInt(val[i]);
        if(ans % 2 !== 0){
            console.log(ans);
        }
    }
}

let value = a(arr);