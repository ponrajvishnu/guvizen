let arr = [1,2,3,4,5];
let k = 2;

((a,k) => {
    n = a.length;
    c = [];
    d = "";
    for(let i = 0;i < n;i++)
    {
        //console.log(a[i]);
        c[(i+k)%(n)] = a[i];
        //console.log(c[(i+k)%(n)]);
    }
    //console.log(c);
    for(let i = 0;i < c.length - 1;i++)
    {
        d += c[i]+" ";
    }
    d += c[c.length-1];
    console.log(d);
})(arr,k);