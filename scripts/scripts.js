//This is for Hamburguer Menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;


 // Fresh page 
 
const checkbox = document.querySelector('.choose')
const requestUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json"


function cargarFruits(){
  fetch(requestUrl)
  .then(respuesta => respuesta.json())
  .then(fruits => {
    fruits.forEach(fruit =>{
      console.log(fruit)
      console.log(fruit.name)
      const checb = document.createElement('div');
      checb.className = 'check'
      checb.innerHTML += `
      
      <input type="checkbox" name="fruits" value="${fruit.name}" class="checkbox">
      <label for="fruits">${fruit.name}</label><br>
      
      `;
      checkbox.appendChild(checb)
    }
      )

  });
};
cargarFruits();



let valueList = document.getElementById('valueList');
let text = '<span> you have selected : </span>';
let listArray = [];

let checkboxes = document.getElementsByClassName('.check');
  for(let checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
    if(this.checked ==true){
      listArray.push(this.value);
      valueList.innerHTML = text + listArray.join(' / ')
    } else{
      console.log('unchecked');

    }
    })
  }


//Footer Info 

let monthnames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

];

let daynames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

//To find and print the current Year
const options = {weekday:"long", day:"numeric", month: "long", year: "numeric"};
const d = new Date();
const year = d.getFullYear();


   
//To show the las updated 
let oLastModif = new Date(document.lastModified);
let dayModif = oLastModif.getDate() 
let monthModif = oLastModif.getMonth()
let yearModif = oLastModif.getFullYear() 
let hourModif = oLastModif.getHours()
let minuteModif = oLastModif.getMinutes()
let secondsModif = oLastModif.getSeconds()
let completeMod = `Last Updated: ${dayModif}/${monthModif + 1}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;