import {restApi} from "/js/modules/restApi.js";

function testUni() {
  console.log("======== test de la requête GET loadDoc() ======");
    if(restApi.loadDoc())
      console.log(restApi.loadDoc());
    else
      console.error('erreur requête GET loadDoc()');
}

//affichage de la liste des articles via une requête JSON 
let ours = restApi.loadDoc();
ours = JSON.parse(ours);

testUni(); // initialisation de la fonction de test

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

