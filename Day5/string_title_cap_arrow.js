let string = "i am guvian";

let a = (str) => {
    let val = str.toLowerCase().split(" ");
    //console.log(val);
    for(let i = 0; i< val.length; i++){
        //console.log(val[i].slice(1));
        val[i] = val[i][0].toUpperCase() + val[i].slice(1);
    }
    //console.log(val.join(" "));
    val.join(" ");
    let res = "";

    for(let i = 0;i < val.length-1;i++){
        //console.log(val[i]);
        res += val[i]+" ";
    }
    res += val[val.length-1];
    return res;
}

console.log(a(string));