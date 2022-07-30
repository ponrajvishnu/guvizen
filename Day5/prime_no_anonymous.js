let arr = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let a = function (arr){
    for(let i = 0;i< arr.length;i++){
        let num = parseInt(arr[i]);

        for(let j = 2;j < num;j++){
            if (num % i === 0){
                console.log(num);
            }
        }
        console.log(num);
    }
}

a(arr);