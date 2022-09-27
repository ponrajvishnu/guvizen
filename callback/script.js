let callfun = () => {
    setTimeout(() => {
        document.querySelector("#text-content").innerText = 10;
        return setTimeout(() => {
            document.querySelector("#text-content").innerText = 9;
            return setTimeout(() => {
                document.querySelector("#text-content").innerText = 8;
                return setTimeout(() => {
                    document.querySelector("#text-content").innerText = 7;
                    return setTimeout(() => {
                        document.querySelector("#text-content").innerText = 6;
                        return setTimeout(() => {
                            document.querySelector("#text-content").innerText = 5;
                            return setTimeout(() => {
                                document.querySelector("#text-content").innerText = 4;
                                return setTimeout(() => {
                                    document.querySelector("#text-content").innerText = 3;
                                    return setTimeout(() => {
                                        document.querySelector("#text-content").innerText = 2;
                                        return setTimeout(() => {
                                            document.querySelector("#text-content").innerText = 1;
                                            return setTimeout(() => {
                                                document.querySelector("#text-content").innerText = 'Happy Independence Day';
                                                callfun();
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

callfun();