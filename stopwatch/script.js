let startTime = (e) => {
    let sec = 00;
    let min = 00;
    let hr  = 00;
    stopwatch = setInterval(() => {
        sec = sec + 01;
        if(sec == 60){
            sec = 00;
            
            min = min + 01;
            if(min == 60){
                min = 00;
    
                hr = hr + 1;
                if(hr == 12){
                    hr = 00;
                }
    
                document.querySelector("#hour").innerHTML = hr;
            }
            document.querySelector("#minute").innerText = min;
        }
        document.querySelector("#second").innerText = sec;
    },1000);
}

let stopTime = (e) => {
    clearInterval(stopwatch);
}

let resetTime = (e) => {
    document.querySelector("#hour").innerText = 00;
    document.querySelector("#minute").innerText = 00;
    document.querySelector("#second").innerText = 00;
}