let page    = 1;
let perpage = 15;

let fetchData = async (val = '') => {
    try{
        let api = '';
        if(val){ // check search text value
            api = `https://api.openbrewerydb.org/breweries?by_name=${val}`; // Search api url
        }else{
            api = `https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perpage}`;  // get all breweries api
        }
        
        let res = await fetch(api);
        let data = await res.json();

        document.querySelector('.main-content').innerHTML = '';  // empty the main content area
        document.querySelector(".main-content").style.opacity = 1; // set opacity
        let head = document.createElement('h3');
        head.setAttribute('class','text-center')
        head.innerHTML = 'Breweries Information';
        document.querySelector('.main-content').append(head);
        
        let searchdiv = document.createElement('div');
        searchdiv.setAttribute('class','search-value');
        let searchtext = document.createElement('p');
        searchtext.innerHTML = `Search text: `;
        searchdiv.append(searchtext);
        document.querySelector('.main-content').append(searchdiv);
        if(val){ // place search text value
            searchtext.innerHTML = `Search text: "${val}"`;
            searchdiv.append(searchtext);
            document.querySelector('.main-content').append(searchdiv);
        }

        if(data.length > 0){  // check output length
            for(let i of data){ // looping the data output - start
                let content_element = document.createElement('div');
                content_element.setAttribute('class','col-12 col-md-6 col-lg-4 brewery-info');

                // set the values
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

                content_element.innerHTML = info;
                document.querySelector('.main-content').append(content_element)
            }  // looping the data output - end
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

fetchData();  // function call


/**** search text - button click function ****/
let ele = document.querySelector('.search-btn');
ele.addEventListener('click', function(){
    let text = document.querySelector('.searchtext');
    let val = text.value;
    console.log(val);
    document.querySelector(".main-content").style.opacity = 0.5;
    fetchData(val);
});
/**** search text - button click function ****/