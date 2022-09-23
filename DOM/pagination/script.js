const list_items = [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    },
    {
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
    }
];

let list_element       = document.getElementById('table');
let pagination_element = document.querySelector('#pagination');
let btnNext            = document.querySelector("#btn_next");
let btnPrev            = document.querySelector("#btn_prev");
let btnLast            = document.querySelector("#last");
let pageSelected       = document.querySelector("#page-select");

let current_page = 1;
let rows = 2;

function firstPage(e){
    current_page = 1;
    DisplayList(list_items, list_element, rows, current_page);
    SetupPagination(list_items, pagination_element, rows);
}

function lastPage(e){
    let page_count = Math.ceil(list_items.length / rows);
    current_page = page_count;
    console.log(current_page+'-'+page_count);
    if(current_page == page_count){
        DisplayList(list_items, list_element, rows, current_page);
        SetupPagination(list_items, pagination_element, rows);
    }
    btnPrev.style.visibility = "visible";
    btnNext.style.visibility = "hidden";
}

function prevPage(e)
{
  if (current_page > 1) {
    current_page--;
    DisplayList(list_items, list_element, rows, current_page);
    SetupPagination(list_items, pagination_element, rows);
    btnPrev.style.visibility = "visible";
  }
  
  if(current_page == 1){
    btnPrev.style.visibility = "hidden";
  }
  
  let page_count = Math.ceil(list_items.length / rows);
  if(current_page == page_count){
    btnNext.style.visibility = "hidden";
  }else{
    btnNext.style.visibility = "visible";
  }
}

function nextPage(e)
{
  let page_count = Math.ceil(list_items.length / rows);
  if (current_page < page_count) {
    current_page++;
    DisplayList(list_items, list_element, rows, current_page);
    SetupPagination(list_items, pagination_element, rows);
    btnPrev.style.visibility = "visible";
  }

  if(current_page == page_count){
    btnNext.style.visibility = "hidden";
  }
}

function DisplayList (items, contentarea, rows_per_page, page) {
	contentarea.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end   = start + rows_per_page;

  pageSelected.style.color = '#FEA219';
  pageSelected.innerText = page + 1; // selected page

  let paginatedItems = items.slice(start, end);

  let headcontent = document.createElement('thead');
  let headName = document.createElement('th');
  let headEmail = document.createElement('th');
  headcontent.append(headName);
  headcontent.append(headEmail);
  headName.append('Name');
  headEmail.append('Email');
  contentarea.append(headcontent);

  let bodyelement = document.createElement('tbody');

  for (let i = 0; i < paginatedItems.length; i++) {
    let item_element = document.createElement('tr');
    let td = document.createElement("td");
    let sectd = document.createElement("td");
    let nameText = document.createTextNode(paginatedItems[i].name);
    let emailText = document.createTextNode(paginatedItems[i].email);
    item_element.classList.add('item');
    item_element.append(td);
    item_element.append(sectd);
    td.append(nameText);
    sectd.append(emailText);

    bodyelement.append(item_element);
    contentarea.append(bodyelement);
  }
}

function SetupPagination (items, contentarea, rows_per_page) {
	contentarea.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		contentarea.append(btn);
	}
}

function PaginationButton (page, items) {
  let button = document.createElement('button');
  button.classList.add('page-btn');
  button.innerText = page;

  if (current_page == page){
    button.classList.add('active'); 
  }
  btnPrev.style.visibility = "hidden";
  btnNext.style.visibility = "visible";

  button.addEventListener('click', function () {
    current_page = page;
    if(current_page > 1){
      btnPrev.style.visibility = "visible";
    }else{
      btnPrev.style.visibility = "hidden";
    }

    let page_count = Math.ceil(items.length / rows);
    if(current_page == page_count){
      btnNext.style.visibility = "hidden";
    }else{
      btnNext.style.visibility = "visible";
    }

    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);