// request data from url by async await method

const url = "https://jsonplaceholder.typicode.com/users";
async function requestData(){
    const request = await fetch(url); // request data from url
    const response = await request.json(); // covert data to json
    const table = document.querySelector('table'); // query table to display data
    await response.forEach(data => { // loop data 

        // Destructuring data
        const {id,name,email,phone,website} = data;

        // condition to dislay data 
        if( id <= 5){
           table.innerHTML +=`
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                <tr>
           `;
        }
    });
}
requestData();