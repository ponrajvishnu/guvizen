const API_KEY = 'ae1eacedf57e5b889751833e53735b07703b05be';

let fetchHoliday = async(country,year) => {
    let api = `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=${country}&year=${year}`;
    let data = await fetch(
        api,
        {
            method: 'GET',
        }
    );
    let result = await data.json();
    console.log(result);
    let val = result.response.holidays;

    if(result.meta.code == 200 && result.response != ''){
        document.querySelector('.main-content').innerHTML = '';

        let title = document.createElement('h4');
        title.setAttribute('class','text-left');
        title.innerHTML = `Holidays List: ${val[0].country.name} - ${year}`;
        document.querySelector('.main-content').append(title);

        for(let i of result.response.holidays){
            //console.log(i)
            let parent_div = document.createElement('div');
            let childData = '';
            parent_div.setAttribute('class','list-section col-12 col-md-6 col-lg-4');
            childData = `<div class='list-data'>
                         <p>Name: <span id="holiday-name">${i.name}</span></p>
                         <p>Description: <span id="holiday-desc">${i.description}</span></p>
                         <p>Date: <span id="holiday-date">${i.date.iso}</span></p>
                         <p>Type: <span id="holiday-type">${i.type}</span></p>
                         <p>Location: <span>${i.locations}</span></p>
                         <p>URL ID: <span>${i.urlid}</span></p></div>`;

            parent_div.innerHTML = childData;
            document.querySelector('.main-content').append(parent_div);
        }
    }else{
        let err = document.createElement('p');
        err.setAttribute('class','text-center text-danger');
        err.innerHTML = 'No record found!!';
        document.querySelector('.main-content').append(err);
    }    
}

let ele = document.querySelector('.search-btn');
ele.addEventListener('click',function(){
    let countryText = document.querySelector('.searchcountry').value;
    let yearText    = document.querySelector('.searchyear').value;

    let errPara = '';
    document.querySelector('.err-section').innerHTML = '';
    if(countryText == '' || yearText == ''){
        errPara = document.createElement('p');
        errPara.setAttribute('class','text-center text-danger');
        errPara.innerHTML = 'Please enter country code & year';
        document.querySelector('.err-section').append(errPara)
    }else{
        document.querySelector('.err-section').innerHTML = '';
        fetchHoliday(countryText,yearText);
    }
});
