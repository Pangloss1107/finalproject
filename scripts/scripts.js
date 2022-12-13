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