const API_KEY = "21e337e273333ffd002b68fcfd0dd9a3";

let fetchAPI = async(city) => {
    let api = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    let data = await fetch(api);
    let res = await data.json();
    console.log(res);

    document.querySelector('.main-content').innerHTML = '';

    if(res.success == false){
        let err = document.createElement('p');
        err.setAttribute('class','text-center text-danger');
        err.innerHTML = 'No record found!!';

        document.querySelector('.main-content').append(err);
    }else{
        let head = document.createElement('h4');
        head.setAttribute('class','head-title');
        head.innerHTML = `${res.request.type} - ${res.request.query}`;
        
        let parentDiv = document.createElement('div');
        parentDiv.setAttribute('class','parent-div row');
        let info = document.createElement('div');
        info.setAttribute('class','info-detail col-12 col-md-6 col-lg-6');
        let detail = `<h6>Location Details</h6>
                    <p>Country: ${res.location.country}</p>
                    <p>Region: ${res.location.region}</p>
                    <p>Lattitude: ${res.location.lat}</p>
                    <p>Longitude: ${res.location.lon}</p>
                    <p>Timezone: ${res.location.timezone_id}</p>
                    <p>Local time: ${res.location.localtime}</p>
                    <p>Local time(UNIX timestamp): ${res.location.localtime_epoch}</p>`;
        info.innerHTML = detail;

        let list = document.createElement('div');
        list.setAttribute('class','weather-detail col-12 col-md-6 col-lg-6');
        let listdata = `<h6>Weather Information</h6>
                        <p>Observation Time: ${res.current.observation_time}</p>
                        <p>Temperature: ${res.current.temperature}</p>
                        <p>Weather description: ${res.current.weather_descriptions[0]}</p>
                        <p>Weather code: ${res.current.weather_code}</p>
                        <p>Wind speed: ${res.current.wind_speed}</p>
                        <p>Wind degree: ${res.current.wind_degree}</p>
                        <p>Wind direction: ${res.current.wind_dir}</p>
                        <p>Pressure: ${res.current.pressure}</p>
                        <p>Humidity: ${res.current.humidity}</p>`;
        list.innerHTML = listdata;
        parentDiv.append(head);
        parentDiv.append(info);
        parentDiv.append(list);
        document.querySelector('.main-content').append(parentDiv);
    }
    
}

let ele = document.querySelector('.search-btn');
ele.addEventListener('click',function(){
    let city = document.querySelector('.searchcity').value;
    if(city == ''){
        alert('Please enter city');
    }else{
        fetchAPI(city);
    }
})