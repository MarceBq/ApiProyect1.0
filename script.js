 

//capturar el api
const selectApi = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
fetch(selectApi)
    .then(response => response.json())
    .then(json => showData(json))


const showData = data => {
    let createList = ` `

    for(let i = 0; i < data.length; i++){

        createList += `
            <li>
             
                <span class="name">${data[i].city}, ${data[i].state}</span>
                <span class="population">${data[i].population}</span>
             
            </li>`
    }

    document.querySelector('ul').innerHTML = createList

    // const lists = document.querySelectorAll('li')
    // console.log(lists)
}

 


 
// console.log(list)
 
document.addEventListener("keyup", e => {
    if (e.target.matches('.search')) {
      
      const text = e.target.value.toLowerCase();
      
      document.querySelectorAll('li .name.population').forEach(el => {
        if (el.textContent.toLowerCase().includes(text)) {
          el.classList.remove('ocultar');
        } else {
          el.classList.add('ocultar');
        }
      });
    }
 
    
});





 

