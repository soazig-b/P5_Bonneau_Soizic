/*import {panier} from "/js/modules/panier.js";
import {button} from "/js/modules/button.js";
import {restApi} from "/js/modules/restApi.js";
import {localStorage} from "/js/modules/localStorage.js";*/


//Récupération des données du serveur
function loadDoc() {
  var items;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     items = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:3000/api/teddies/", false);
  xhttp.send();
  return items;
}
//affichage de la liste des articles via requête JSON mettre dans un module
let ours = loadDoc();
ours = JSON.parse(ours);

// affichage dans le HTML
let conteneurproduit = document.getElementById('conteneurproduit');

// boucle forEach pour afficher chaque article à la suite sous forme de liste
ours.forEach(element => {
  
    let htmlOurs = document.createElement("a");
    conteneurproduit.appendChild(htmlOurs);
    htmlOurs.classList.add("peluche-produit");
    htmlOurs.setAttribute('href', `product.html?id=${element._id}`);

    let img = document.createElement("img");
    htmlOurs.appendChild(img);
    img.classList.add("peluche-img-produit");
    img.setAttribute('src', `${element.imageUrl}`);

    let h3 = document.createElement("h3");
    htmlOurs.appendChild(h3);
    h3.classList.add("peluche-name");
    h3.textContent = element.name;
    
    let p = document.createElement("p");
    htmlOurs.appendChild(p);
    p.classList.add("peluche-price");
    p.textContent = element.price / 100 + "€";

  });

