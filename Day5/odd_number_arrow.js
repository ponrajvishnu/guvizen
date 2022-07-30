let arr = [1,2,3,4,5];

let a = (arr) => {
    for(let i = 0;i < arr.length;i++){
        let val = parseInt(arr[i]);
        if(val % 2 !== 0){
            console.log(val);
        }
    }
}

let value = a(arr);