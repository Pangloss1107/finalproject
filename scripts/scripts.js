//This is for Hamburguer Menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;


 // Fresh page 

 const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const names = jsonObject["name"];
    
    for (let i = 0; i < 5; i++) {
        let checkbox = document.createElement("input");
        let fruits = document.createElement("label");   
        let p3 = document.createElement("p");   

        checkbox.setAttribute('type', 'checkbox', 'class', "fruits",  'name', "fruits", 'value')
        p3 = names[i].name
        fruits.setAttribute('for')
        checkbox.appendChild(fruits)
        checkbox.appendChild(p3)


      document.querySelector("div#scroll").appendChild(clientsbox);
    }
  });




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