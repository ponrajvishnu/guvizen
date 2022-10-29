const API_KEY = 'ecbae007-6839-403c-b45b-4bed6ed9105c';

let fetchData = async (state = '',country = '') =>  {
    try{
        let api = '';
        if(state != '' && country != ''){
            api = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${API_KEY}`;
        }else{
            api = `https://api.airvisual.com/v2/countries?key=${API_KEY}`;
        }
        
        let data = await fetch(
            api,
            {
                method: 'GET',
            }
        );
        let result = await data.json();
        console.log(result);

        document.querySelector('.main-content').innerHTML = '';
        if(result.status == 'success'){
            let title = document.createElement('h4');
            title.setAttribute('class','text-left');
            if(state != '' && country != ''){
                title.innerHTML = 'List supported cities in a state:';
            }else{
                title.innerHTML = 'List Supported Countries:';
            }
            document.querySelector('.main-content').append(title);

            for(let i of result.data){
                let parent_div = document.createElement('div');
                let childData = '';
                parent_div.setAttribute('class','col-12 col-md-6 col-lg-4');
                if(state != '' && country != ''){
                    childData = `<p>${i.city}</p>`;
                }else{
                    childData = `<p>${i.country}</p>`;
                }

                parent_div.innerHTML = childData;
                document.querySelector('.main-content').append(parent_div);
            }
        }else{
            let err = document.createElement('p');
            err.setAttribute('class','text-center text-danger');
            err.innerHTML = 'No record found!!';

            document.querySelector('.main-content').append(err);
        }
    }catch(err){
        console.log(err)
    }
}

fetchData();

let ele = document.querySelector('.search-btn');
ele.addEventListener('click',function(){
    let stateText   = document.querySelector('.searchstate').value;
    let countryText = document.querySelector('.searchcountry').value;

    let errPara = '';
    if(stateText == ''){
        errPara = document.createElement('p');
        errPara.setAttribute('class','text-center text-danger');
        errPara.innerHTML = 'Please enter state';
        document.querySelector('.err-section').append(errPara)
    }else if(countryText == ''){
        document.querySelector('.err-section').innerHTML = '';
        errPara = document.createElement('p');
        errPara.setAttribute('class','text-center text-danger');
        errPara.innerHTML = 'Please enter country';
        document.querySelector('.err-section').append(errPara)
    }else{
        document.querySelector('.err-section').innerHTML = '';
        fetchData(stateText,countryText);
    }
});