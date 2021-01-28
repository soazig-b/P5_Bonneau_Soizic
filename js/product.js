const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

/*Récupération des données du serveur*/
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
  /*affichage de l'article via requête JSON*/
  let ours = getOurs();
  ours = JSON.parse(ours);
  console.log (ours);

/* création du HTML*/

let detailoption = document.getElementById('detailoption');

let htmlOurs = document.createElement("a");
detailoption.appendChild(htmlOurs);
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
p.textContent = element.price;
/*<p class="peluche-price">${element.price / 100}€</p>*/

