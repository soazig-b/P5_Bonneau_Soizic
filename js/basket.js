import {panier} from "/js/modules/panier.js";

/*envoi sur page panier après selection de l'ours sur page produit*/
function addOurs(){ 
    var result;
    const url = new URL ("http://localhost:3000/api/teddies/order");
    var jsonInputString = JSON.stringify({ contact:
        {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            address: document.getElementById("adress").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
        },
        products: tabId
    });

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
        }
    };
    result = xhr.send(jsonInputString);
    return result; 
}

function getOurs(id) {
    var items;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       items = JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/teddies/".concat(id), false);
    xhttp.send();
    return items;
  }

// tri des infos du panier


//le formulaire ne doit pas s'afficher si le panier est vide


// 1- si le panier est plein :
if(localStorage.getItem("panier")) 
{
    // récupération des items du localStorage
    let tabId = localStorage.getItem("panier");

    // message invitant à vérifier la commande si le panier est rempli
    let basketFull = document.createElement("p");
    recapitulatif.appendChild(basketFull);
    basketFull.classList.add("verif-commande");
    basketFull.textContent = "Veuillez vérifier votre commande ci-dessus avant de valider le paiement.";
  
  // retransformer les strings en liste
  
    let recapOurs = tabId;
    recapOurs = JSON.parse(recapOurs);

    // boucle forEach pour récupérer les items placés dans le panier
    //var total = 0;
    // total = total + element.price puis après le boucle ajouter ce total au html
    recapOurs.forEach(function(element, index, array) {
  
        let ours = getOurs(element.id)

        let detailBasket = document.getElementById('panier-recap');

        let productBasket = document.createElement("div");
        detailBasket.appendChild(productBasket);
        productBasket.classList.add("peluche-panier");
        productBasket.setAttribute('href', `product.html?id=${ours._id}`);

        let img = document.createElement("img");
        productBasket.appendChild(img);
        img.classList.add("peluche-img-panier");
        img.setAttribute('src', `${ours.imageUrl}`);

        let h3 = document.createElement("h3");
        productBasket.appendChild(h3);
        h3.classList.add("peluche-name-panier");
        h3.textContent = ours.name;

        let pCOlor = document.createElement("p");
        productBasket.appendChild(pCOlor);
        pCOlor.classList.add("peluche-color-panier");
        pCOlor.textContent = ours.colors[element.color];
            
        let p = document.createElement("p");
        productBasket.appendChild(p);
        p.classList.add("peluche-price-panier");
        p.textContent = ours.price / 100 + "€";

        let btnCancel = document.createElement("button");
        btnCancel.classList.add("bouton-supprimer");      
        let tCancel = document.createTextNode("supprimer");       
        btnCancel.appendChild(tCancel);                           
        productBasket.appendChild(btnCancel);
        
        
        btnCancel.addEventListener("click", function() {
            panier.deleteOneItem(array, index);
            document.location.reload();
        });
    });

}

// 2- si le panier est vide 
else 
{
    
    let panierRecap = document.getElementById("panier-recap");

    let basketEmpty = document.createElement("p");
    panierRecap.appendChild(basketEmpty);
    basketEmpty.classList.add("panierVide");
    basketEmpty.textContent = "Votre panier est vide";
   
    // rien dans le panier donc retour à l'accueil
    let btnReturn = document.createElement("button");
    btnReturn.classList.add("bouton-retour-accueil");  
    let t = document.createTextNode("Retour à la page d'accueil");       
    btnReturn.appendChild(t);                           
    basketEmpty.appendChild(btnReturn);

    // renvoi à la page html accueil
    function RedirectionJavascript(){
        document.location.href="index.html";
      }
      btnReturn.addEventListener("click", function() {
            var btnReturn = document.location.href="index.html";
      });  
      
      document.getElementById("formulaire_commande").style.display = "none";
      
}


 // btn commander add envent listener {
// attention au rafraichissement de page (en html) : input submit et balise form
 // recupe des variables et créer un objet avec ces infos pour envoyer à l'api
// enregistré ces infos en local storage 
// faire redirection sur bonne page pour afficher num de commande
let orderBouton = document.getElementById("commander");

let order = document.createElement("button");
order.classList.add("bouton-order");      
let text = document.createTextNode("Commander");       
order.appendChild(text);                           
orderBouton.appendChild(order);

//let ours = addOurs();
//console.log('Ours : ' + ours);}

// orga du code, par exemple : faire un fichier que pour le localStorage
//module : restApi (toutes les fonctions pour requêter sur l'api)
//module : fonction reload etc...