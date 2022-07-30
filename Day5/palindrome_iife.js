let arr = [1,2,2,1];

((arr) => {
    for(let i = 0;i < arr.length/2;i++){
        if(arr[i] !== arr[arr.length - i -1]){
            console.log('false');
        }
    }
    console.log('true');
})(arr);