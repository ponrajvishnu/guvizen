let a = [1,2,3,7];
let b = [4,5,6,8];

((a,b) => {
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
        med = (c[(c.length/2)-1]+c[c.length/2])/2;
    }else
    {
        med = c[Math.floor(c.length/2)];
    }
    console.log(med);
})(a,b);