import {restApi} from "/js/modules/restApi.js";
import {localStor} from "/js/modules/localStorage.js";

function testUni() {
  console.log("====== test de la requête GET getOurs() ======");
  if(restApi.getOurs(id))
    console.log(restApi.getOurs(id));
  else
    console.error('erreur requête GET getOurs()');
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//affichage de l'article via requête JSON
let ours = restApi.getOurs(id);
ours = JSON.parse(ours);

testUni(); // initialisation de la fonction de test

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

// envoi au localstorage 
btn.addEventListener("click", async function() {
 localStor.panier(id)
});
