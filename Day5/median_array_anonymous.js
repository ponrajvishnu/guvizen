let a = [1,2,3,7];
let b = [4,5,6,8];

let arr = function(a,b){
    let c = [];
    let n = a.length;
    let p = b.length;
    let i = 0;
    let j = 0;
    let med = 0;
    while(i<n && j<p)
    {
        if(a[i] < b[j])
        {
            c.push(a[i]);
            i++;
        }else
        {
            c.push(b[j]);
            j++;
        }
    }
    //console.log(c);
    //console.log(i);
    if(i < n)
    {
        for(let k = i;k < n;k++)
        {
            c.push(a[k]);
        }
    }else if(j < p)
    {
        for(let m = j;m < p;m++)
        {
            c.push(b[m]);
        }
    }

    if(c.length % 2 === 0)
    {
        //console.log(c.length);
        //console.log((c.length/2)+'+'+((c.length/2)-1));
        med = (c[(c.length/2)-1]+c[c.length/2])/2;
    }else
    {
        //console.log(c.length);
        med = c[Math.floor(c.length/2)];
    }
    return med;
}
console.log(arr(a,b));