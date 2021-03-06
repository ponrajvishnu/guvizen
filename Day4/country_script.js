let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.onload = () => {
    console.log(request.status);
    // console.log(request.statusText);
    // console.log(request.response);

    let result = JSON.parse(request.response);
    
    /*********************** COUNTRY FLAG SECTION *************************/
    for(let i = 0;i <= result.length;i++){
        console.log("PNG Image = "+result[i].flags.png);
        console.log("SVG Image = "+result[i].flags.svg);
    }
    /*********************** COUNTRY FLAG SECTION *************************/
}

request.onerror = () => {
    console.log(request.status);
    console.log(request.statusText);
    console.log(request.response);
}

request.send();