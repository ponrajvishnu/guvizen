const arr1 = [1,12,15,26,38];
const arr2 = [2,13,17,30,45];

let median = function (a,b){
    let c = [...a, ...b].sort((a, b) => a - b);
    //console.log(c);
    const half = c.length / 2 | 0;
    // console.log(half);
    // console.log(c.length);
    if(c.length % 2)
    {
        return c[half];
    }else{
        return (c[half] + c[half - 1]) / 2;
    }
}

console.log(median(arr1,arr2));
