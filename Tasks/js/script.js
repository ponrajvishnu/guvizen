let request = new XMLHttpRequest();

request.open("GET","https://62d54ff515ad24cbf2c42c7a.mockapi.io/api");

request.onload = () => {
    console.log(request.status);
    console.log(request.statusText);
    console.log(request.response);
    
    //response = [{"createdAt":"2022-07-17T20:30:49.790Z","name":"Beulah Hyatt","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg","id":"1"},{"createdAt":"2022-07-18T08:04:15.769Z","name":"Ginger Medhurst","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/963.jpg","id":"2"},{"createdAt":"2022-07-18T11:33:07.885Z","name":"Tricia Kiehn","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg","id":"3"},{"createdAt":"2022-07-17T23:59:51.808Z","name":"Mable Lemke","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg","id":"4"}];

    let result = JSON.parse(request.response);
    //let result = response;
    //console.log(result);

    /******************* FOR LOOP *************************/
    for(let i = 0;i < result.length;i++){
        console.log("Created At = "+result[i].createdAt+"; ID = "+result[i].id+"; Name = "+result[i].name);
    }
    /******************* FOR LOOP *************************/

    /******************* FOR IN LOOP **********************/
    for(let x in result){
        //console.log(x);
        console.log("Created At = "+result[x].createdAt+"; ID = "+result[x].id+"; Name = "+result[x].name);
    }
    /******************* FOR IN LOOP **********************/

    /******************* FOR OF LOOP **********************/
    for(let value of result){
        //console.log(value);
        console.log("Created At = "+value.createdAt+"; ID = "+value.id+"; Name = "+value.name);
    }
    /******************* FOR OF LOOP **********************/

    /******************* FOR EACH LOOP ***********************/
    result.forEach(function(key, index){
        console.log("Created At = "+key.createdAt+"; ID = "+key.id+"; Name = "+key.name);
    });
    /******************* FOR EACH LOOP ***********************/
};

request.onerror = (err) => {
    console.log(err);
    console.log(request.statusText);
    console.log(request.status);
}

request.send();
