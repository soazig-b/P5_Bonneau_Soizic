import { button } from "/js/modules/button.js";
import {restApi} from "/js/modules/restApi.js";

function testUni() {
    
    console.log("====== test du localStorage ======");
    console.log("====== récupération de l'ID de l'ours ======");
        if(localStorage.getItem("panier"))
            console.log(localStorage.getItem("panier"));
        else
            console.error('erreur');
    
    console.log("====== vérification du prix total du panier ======");
        if(total)
            console.log(total);
        else
            console.error('erreur');
    
    console.log("======== vérification envoi inputs formulaire =======");
        if(button.orderBtn(total))
            console.log(button.orderBtn(total));
        else
            console.error('erreur formulaire pas correctement rempli');
}

// tri des infos du panier :
// 1- si le panier est plein :
if(localStorage.getItem("panier") != null && localStorage.getItem("panier") != "[]") 
{
    // récupération des items du localStorage
    let tabId = localStorage.getItem("panier");
    
    // message invitant à vérifier la commande si le panier est rempli
    let basketFull = document.createElement("p");
    recapitulatif.appendChild(basketFull);
    basketFull.classList.add("verif-commande");
    basketFull.textContent = "Veuillez vérifier votre commande ci-dessus avant de valider le paiement.";
  
    // retransformer les strings en liste
    let recapOurs = JSON.parse(tabId);

    // total du panier
    var total = 0;

    // boucle forEach pour récupérer les items placés dans le panier
    recapOurs.forEach(function(element, index, array) {
  
        let ours = restApi.getOurs(element, false)

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

        /*let pCOlor = document.createElement("p");
        productBasket.appendChild(pCOlor);
        pCOlor.classList.add("peluche-color-panier");
        pCOlor.textContent = ours.colors[element.color];*/
            
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
            button.deleteOneItem(array, index);
            document.location.reload();
        });
 
        // somme totale du panier
        total = total + ours.price / 100;
    });

    // bouton continuer ses achats
    let shop = document.getElementById("continu-shopping");

    let continuSHop = document.createElement("p");
    shop.appendChild(continuSHop);
    continuSHop.classList.add("continu-shop");
    continuSHop.textContent = "Continuer vos achats";

    let btnReturnSHop = document.createElement("button");
    btnReturnSHop.classList.add("bouton-continu-shopping");  
    let continu = document.createTextNode("Shopping");       
    btnReturnSHop.appendChild(continu);                           
    continuSHop.appendChild(btnReturnSHop);

    // renvoi à la page html accueil
    btnReturnSHop.addEventListener("click", function() {
        button.returnHome()
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
    btnReturn.addEventListener("click", function() {
        button.returnHome()
    });
      
    //le formulaire ne s'affiche pas
    document.getElementById("formulaire_commande").style.display = "none";
    document.getElementById("total").style.display = "none";
}

// Somme total du panier qui s'affiche en-dessous des articles du panier
let totalOrder = document.getElementById('total-panier');
 
let totalBasket = document.createElement("h3");
totalOrder.appendChild(totalBasket);
totalBasket.classList.add("total");
totalBasket.textContent = "Total de votre panier : " + '' + total + "€";


// bouton commander 
let orderBouton = document.getElementById("commander");    

orderBouton.addEventListener("click", function(e){
    button.orderBtn(total);
});

testUni(); // initialisation de la fonction de test