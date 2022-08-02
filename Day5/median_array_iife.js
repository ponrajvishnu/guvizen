const arr1 = [1,12,15,26,38];
const arr2 = [2,13,17,30,45];

((a,b) => {
    let c = [...a, ...b].sort((a, b) => a - b);
    //console.log(c);
    const half = c.length / 2 | 0;
    // console.log(half);
    // console.log(c.length);
    if(c.length % 2)
    {
        console.log(c[half]);
    }else{
        console.log((c[half] + c[half - 1]) / 2);
    }
})(arr1,arr2);