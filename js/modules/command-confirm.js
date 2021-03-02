/*import {panier} from "/js/modules/panier.js";
import {button} from "/js/modules/button.js";
import {restApi} from "/js/modules/restApi.js";
import {localStorage} from "/js/modules/localStorage.js";*/

let order = JSON.parse(localStorage.getItem("order"));

let total = localStorage.getItem("total"); 


let idConfirm = document.getElementById("idOrder");

let idConf = document.createElement("p");
idConfirm.appendChild(idConf);
idConfirm.classList.add("numero-id");
idConfirm.textContent = 'numéro de commande : ' + order.orderId;

console.log(order);

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
            var btnReturn = document.location.href="index.html";
      });  


//localStorage.clear(); // On clean le localStorage pour les futurs commandes

