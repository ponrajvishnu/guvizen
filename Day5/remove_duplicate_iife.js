let arr = [1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2];

((arr) => {
    let b = [];
    for(let i = 0;i < arr.length-1;i++){
        for(let j = i+1;j < arr.length;j++){
            if(arr[i] === arr[j]){
                //console.log(arr[j]);
                delete arr[j];
            }
        }
    }

    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 10 === Math.floor(arr[i] % 10)){
            b.push(arr[i]);
        }
    }
    
    let c = "";
    for(let i = 0;i < b.length-1;i++)
     {
         c += b[i]+" ";
    }
    c += b[b.length-1];
     console.log(c);
})(arr);