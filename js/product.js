/*import {panier} from "/js/modules/panier.js";
import {button} from "/js/modules/button.js";
import {restApi} from "/js/modules/restApi.js";
import {localStorage} from "/js/modules/localStorage.js";*/




const params = new URLSearchParams(window.location.search);
const id = params.get("id");


//envoi sur page produit après selection de l'ours sur page index
function getOurs() {
  var items;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     items = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:3000/api/teddies/".concat(id), false);
  xhttp.send();
  return items;
}

//affichage de l'article via requête JSON
let ours = getOurs();
ours = JSON.parse(ours);

// création du HTML 
let detailOption = document.getElementById('detail-produit');

let productOurs = document.createElement("div");
detailOption.appendChild(productOurs);
productOurs.classList.add("peluche-article");
productOurs.setAttribute('href', `product.html?id=${ours._id}`);

let img = document.createElement("img");
productOurs.appendChild(img);
img.classList.add("peluche-img-article");
img.setAttribute('src', `${ours.imageUrl}`);

let h3 = document.createElement("h3");
productOurs.appendChild(h3);
h3.classList.add("peluche-name-article");
h3.textContent = ours.name;

let p = document.createElement("p");
productOurs.appendChild(p);
p.classList.add("peluche-price-article");
p.textContent = ours.price / 100 + "€";

// selecteur de couleurs 
let select = document.createElement("select");
select.classList.add("peluche-select-colors");
select.setAttribute('id', 'peluche-select-colors');
productOurs.appendChild(select);

// boucle forEach pour le selecteur de couleurs 
ours.colors.forEach(element => {
  var colors = document.createElement("option");
  colors.value = element;
  colors.textContent = element;
  select.appendChild(colors);
});

// bouton panier 
let btn = document.createElement("button");
btn.classList.add("bouton-panier");      
let t = document.createTextNode("Ajouter au panier");       
btn.appendChild(t);                           
productOurs.appendChild(btn);

// envoyer au localstorage 
btn.addEventListener("click", async function() {
  if(localStorage.getItem("panier")) {
    let tabId = localStorage.getItem("panier");
    tabId = JSON.parse(tabId);
    tabId.push(id) 
    tabId = JSON.stringify(tabId);
    localStorage.setItem("panier", tabId);
    }
    else {
      let tabId = [id];
      tabId = JSON.stringify(tabId);
      localStorage.setItem("panier", tabId);
    }
      document.location.href="basket.html";
  });
