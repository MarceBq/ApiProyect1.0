
//Varible global
let variableGlobal;


//Capturo el nodo del search
const searchInput = document.querySelector('.search') 
const selectUl = document.querySelector('.suggestions')
 
//capturar el api
const selectApi = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
fetch(selectApi)
    .then(response => response.json())
    .then(data =>  variableGlobal = data)
 

searchInput.addEventListener("keyup", e => {
     
  //Arreglo para guardar los valores
  let newArray = [] 
 
  //valor del input
  const inputValue = e.target.value

  const arraysFilter = variableGlobal.filter(({city, state}) => city.includes(inputValue) 
  || state.includes(inputValue))
  
  
  // const searcherStyle = variableGlobal.filter(({city, state}) => city.includes(inputValue)  
  // || state.includes(inputValue))
  
 
  arraysFilter.forEach(({city, state, population}) => {
    
    const highlight = `<span class="hl">${inputValue}</span>`

    newArray += `<li>
    <span>${city.replace(new RegExp(inputValue, 'gi'), highlight)}, ${state.replace(new RegExp(inputValue, 'gi'), highlight)}</span>
    <span class="population">${population}</span>
    </li>
    `
 
    
    }); 

    selectUl.innerHTML = newArray
  

    


    

    // const wordCities = ' ';

    // const highlightAngeles = `Los <span class="hl">Angeles</span>`




    
  // searcherStyle.forEach(({city, state}) => {

  //   `Los <span class="hl">${city}</span>`
    
  // })


   
});

 