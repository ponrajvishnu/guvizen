const API_KEY = "live_0mBGTDQlItul4mRKtvfSCP9gn4IC4MagFKFQ1WrxFjs0JCjW8pledqVD6TdeMMn0";

let page = 1;
var fetchData = async () => {
    let category = document.querySelector(".change-category");
    let apival = category.value;
    let api = '';
    
    if(apival == 1){
        api = `https://api.thecatapi.com/v1/breeds?page=${page}&limit=15`;
    }else if(apival == 2){
        api = `https://api.thedogapi.com/v1/breeds?page=${page}&limit=15`;
    }else{
        api = `https://api.thecatapi.com/v1/breeds?page=${page}&limit=15`;
    }

    let res = await fetch(
        api,
        {
            method : 'GET',
            headers : {
                'x-api-key' : API_KEY,
                'content-type' : 'application/json'
            }
        }
    )
    //console.log(res);
    let data = await res.json();
    document.querySelector(".row").innerHTML = '';
    document.querySelector(".row").style.opacity = 1;
    let title = document.createElement('h1');
    title.setAttribute('class','text-center title-content');
    title.innerHTML = 'Cat Details';
    if(apival == 2){
        title.innerHTML = 'Dog Details';
    }
    document.querySelector(".row").append(title);
    for(let i of data){
        //console.log(i)
        let sectionContent = document.createElement('div');
        sectionContent.setAttribute('class','col-12 col-md-6 col-lg-4 content-section');
        
        let imageContent = document.createElement('img');
        imageContent.setAttribute('class','imgsize')
        imageContent.src = i.image.url;
        
        let divContent = `<div class="contentSec">
                <img src=${i.image.url} class="imgsize">
                <div class="descSection"><p>Name : <span>${i.name}</span></p>
                <p>Origin : <span>${i.origin}</span></p>
                <p>Alt Name : <span>${i.alt_names}</span></p>
                <p>Life Years : <span>${i.life_span}</span></p>
                <p>Nature : <span>${i.temperament}</span></p><div><div>`

        sectionContent.innerHTML = divContent;
        //sectionContent.append(imageContent);
        
        
        document.querySelector(".row").append(sectionContent);
    }
}

fetchData();

/*** Change select category dropdown ***/
function categoryChange(val){
    document.querySelector(".row").style.opacity = 0.5;
    fetchData();
}
/*** Change select category dropdown ***/



// let scroll = 0;
// window.addEventListener('scroll',()=>{
//     scroll++;
//     if (scroll == 1 && window.innerHeight + window.scrollY > document.body.offsetHeight-200){
//         console.log('scrolling');
//         console.log(page);
//         page++;
//         fetchData();
//     }
//     scroll = 0;
// })