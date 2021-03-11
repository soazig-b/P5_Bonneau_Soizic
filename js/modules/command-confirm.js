import {button} from "/js/modules/button.js";

function testUni() {
  console.log("====== récupération de l'orderId ======");
    if(order.orderId)
      console.log(order.orderId);
    else
      console.error('erreur : mauvais envoi des données du formulaire ou localStorage vide');
    
  console.log("====== nettoyage du localStorage ======");
    if(localStorage.clear())
      console.log('erreur');
    else
      console.error(" localStorage CLEAN"); 
}

//Récupérartion de l'order et du prix total
let order = JSON.parse(localStorage.getItem("order"));
let total = localStorage.getItem("total"); 

//création du HTML
let idConfirm = document.getElementById("idOrder");

let idConf = document.createElement("p");
idConfirm.appendChild(idConf);
idConfirm.classList.add("numero-id");
idConfirm.textContent = 'numéro de commande : ' + order.orderId;

let cost = document.getElementById("costOrder");

let costOrder = document.createElement("p");
cost.appendChild(costOrder);
cost.classList.add("command-price");
cost.textContent = 'total de votre commande : ' + total + ' €';


// renvoi à la page html accueil
let btnReturn = document.getElementById("return");
btnReturn.classList.add("bouton-return-accueil");  
let t = document.createTextNode("Retour à la page d'accueil");       
btnReturn.appendChild(t);                           
    
btnReturn.addEventListener("click", function() {
  button.returnHome();         
  });

localStorage.clear(); // On clean le localStorage pour les futurs commandes  

testUni(); // initialisation de la fonction de test



