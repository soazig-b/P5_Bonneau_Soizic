import {restApi} from "/js/modules/restApi.js";
//mettre tous les tests ici et en faire une fonction Unitest par page

function testUni() {
  console.log("======== loadDoc ======"); //séparer les tests
  console.log("====== variable ours (détail de l'article) ======");
  if(ours)
    console.log(ours);
  else
    console.error('Aucun ours');
  /*console.log("====== vérification du prix de chaque ours ======");
  console.log(element.price);
  console.log("====== getOurs ======");
  console.log(getOurs());
  console.log("====== requête POST ======");
  console.log(addOurs());*/
}

//affichage de la liste des articles via une requête JSON 
let ours = restApi.loadDoc();
ours = JSON.parse(ours);

testUni()
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

