let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.onload = () => {
    console.log(request.status);
    // console.log(request.statusText);
    // console.log(request.response);

    let result = JSON.parse(request.response);
    
    /*********************** COUNTRY NAME, REGION, SUB REGION AND POPULATION *************************/
    for(let i of result){
        //console.log(result[i]);
        console.log("Country Name = "+i.name+"; Region = "+i.region+"; Sub Region = "+i.subregion+"; Population = "+i.population);
    }
    /*********************** COUNTRY NAME, REGION, SUB REGION AND POPULATION *************************/
}

request.onerror = () => {
    console.log(request.status);
    console.log(request.statusText);
    console.log(request.response);
}

request.send();