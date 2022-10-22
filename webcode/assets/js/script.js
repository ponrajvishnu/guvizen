let page    = 1;
let perpage = 15;
let fetchData = async (val = '') => {
    try{
        let api = '';
        if(val){
            api = `https://api.openbrewerydb.org/breweries/search?query=${val}`;
        }else{
            api = `https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perpage}`;
        }
        
        let res = await fetch(api);
        let data = await res.json();
        //console.log(data);

        document.querySelector('.main-content').innerHTML = '';
        document.querySelector(".main-content").style.opacity = 1;
        let head = document.createElement('h3');
        head.setAttribute('class','text-center')
        head.innerHTML = 'Brewery Information';
        document.querySelector('.main-content').append(head);
        
        let searchdiv = document.createElement('div');
        searchdiv.setAttribute('class','search-value');
        let searchtext = document.createElement('p');
        searchtext.innerHTML = `Search text: `;
        searchdiv.append(searchtext);
        document.querySelector('.main-content').append(searchdiv);
        if(val){
            searchtext.innerHTML = `Search text: "${val}"`;
            searchdiv.append(searchtext);
            document.querySelector('.main-content').append(searchdiv);
        }

        if(data.length > 0){
            for(let i of data){
                let content_element = document.createElement('div');
                content_element.setAttribute('class','col-12 col-md-6 col-lg-4 brewery-info');

                let info = `<div class="content-sec">
                            
                            <p><span class='info-cls'>Breweries Name: </span><span class='ans-cls'>${i.name}</span></p>
                            <p><span class='info-cls'>Breweries Type: </span><span class='ans-cls'>${i.brewery_type}</span></p>
                            <p><span class='info-cls'>Address: </span><span class='ans-cls'>${i.street},  ${i.city} - ${i.postal_code}, ${i.state} </span></p>`;
                            if(i.website_url != null){
                                info += `<p><span class='info-cls'>Website URL: </span><a href=${i.website_url}>${i.website_url}</a></p>`;
                            }else{
                                info += `<p><span class='info-cls'>Website URL:</span> <span class='ans-cls'> -- </span></p>`;
                            }
                            info += `<p><span class='info-cls'>Phone Number: </span><span class='ans-cls'>${i.phone}</span></p>
                            </div>`;
                //console.log(info)
                content_element.innerHTML = info;
                document.querySelector('.main-content').append(content_element)
            }
        }else{
            let textarea = document.createElement('p');
            textarea.setAttribute('class','text-center text-danger');
            textarea.innerHTML = 'No record found!';
            document.querySelector('.main-content').append(textarea);
        }
    }catch(err){
        console.log(err);
    }
    
}

fetchData();

let ele = document.querySelector('.search-btn');
ele.addEventListener('click', function(){
    let text = document.querySelector('.searchtext');
    let val = text.value;
    console.log(val);
    document.querySelector(".main-content").style.opacity = 0.5;
    fetchData(val);
});