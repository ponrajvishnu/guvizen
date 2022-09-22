let result = document.querySelector("#result");
result.value = '';

var keyclick = (e) =>{
    let value = e.getAttribute("value");
    result.value = result.value + value;
}

let keyfunction = (e) => {
    let operation = e.getAttribute("value");
    result.value = result.value + operation;
}

let getresult = (e) => {
    result.value = eval(result.value);
}

let clearfunction = (e) => {
    result.value = 0;
}

let backspace = (e) => {
    let val = result.value;
    result.value = val.substring(0,val.length - 1);
}