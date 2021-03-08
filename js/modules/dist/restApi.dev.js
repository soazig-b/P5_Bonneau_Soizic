"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restApi = void 0;

var _button = require("/js/modules/button.js");

var restApi = {
  /**
   * Charger les données des ours pour vue.
   *
   * @return {string} string ours data.
   */
  loadDoc: function loadDoc() {
    //Récupération des données du serveur via une requête GET
    var items;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        items = this.responseText;
      }
    };

    xhttp.open("GET", "http://localhost:3000/api/teddies/", false);
    xhttp.send();
    return items;
  },
  getOurs: function getOurs(id) {
    var product = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof id !== "string") {
      throw "Parameter should be a string";
    }

    var items;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (product) {
          items = this.responseText;
        } else items = JSON.parse(this.responseText);
      }
    };

    xhttp.open("GET", "http://localhost:3000/api/teddies/".concat(id), false);
    xhttp.send();
    return items;
  },
  addOurs: function addOurs() {
    var url = "http://localhost:3000/api/teddies/order";
    var jsonInputString = JSON.stringify({
      contact: {
        firstName: document.getElementById("nom").value,
        lastName: document.getElementById("prenom").value,
        address: document.getElementById("adresse").value,
        city: document.getElementById("ville").value,
        email: document.getElementById("email").value
      },
      products: JSON.parse(localStorage.getItem("panier"))
    });
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(jsonInputString);

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (this.status === 201) {
          localStorage.setItem("order", this.responseText);
          console.log(JSON.parse(this.responseText));

          _button.button.confirm();
        } else {
          console.log(request);
        }
      }
    };
  }
};
exports.restApi = restApi;