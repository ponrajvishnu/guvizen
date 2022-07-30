let arr = [1,2,3,4,5];

((arr) => {
    let ans = 0;
    for(let i = 0; i < arr.length;i++){
        ans += parseInt(arr[i]);
    }
    console.log(ans);
})(arr);