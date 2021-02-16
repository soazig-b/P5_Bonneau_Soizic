"use strict";

if (localStorage.getItem("panier")) {
  /*recupérer ce qu'il t a dans le localstorage;*/
  // localStorage.clear("panier")
  var _tabId = localStorage.getItem("panier"); //console.log(tabId);

} else {} // vous avez rien dans le panier

  /*envoi sur page panier après selection de l'ours sur page produit*/


function addOurs() {
  var result;
  var url = new URL("http://localhost:3000/api/teddies/order");
  var jsonInputString = JSON.stringify({
    contact: {
      firstName: "toto",
      lastName: "toto",
      address: "toto",
      city: "toto",
      email: "toto@toto.fr"
    },
    products: tabId
  });
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json.email + ", " + json.password);
    }
  };

  result = xhr.send(jsonInputString);
  return result;
}
/*affichage de le panier via requête JSON*/


var ours = addOurs(); //ours = JSON.parse(ours);

console.log('Ours : ' + ours);