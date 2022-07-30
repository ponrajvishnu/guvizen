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

    /*********************** COUNTRY NAME, REGION, SUB REGION AND POPULATION *************************/
    for(let i = 0;i <= result.length;i++){
        //console.log(result[i]);
        console.log("Country Name = "+result[i].name+"; Region = "+result[i].region+"; Sub Region = "+result[i].subregion+"; Population = "+result[i].population);
    }
    /*********************** COUNTRY NAME, REGION, SUB REGION AND POPULATION *************************/
}

request.onerror = () => {
    console.log(request.status);
    console.log(request.statusText);
    console.log(request.response);
}

request.send();