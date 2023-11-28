document.addEventListener("DOMContentLoaded", function() {
   
let URL = "https://pokeapi.co/api/v2/pokemon/"
document.getElementById("boton").addEventListener("click",() =>{
    let coso = document.getElementById("input").value
    let lista = document.getElementById("lista")
   
lista.innerHTML=""
    fetch(`${URL}${coso}/`)
    .then(data => data.json())
    .then(data => 

    data.abilities.forEach(element => {
                let li = document.createElement("li");
                li.textContent = element.ability.name; 
                lista.appendChild(li); 
                console.log(element);
         }))



})
 })