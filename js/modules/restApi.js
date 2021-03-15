import { button } from "/js/modules/button.js";

const restApi = {

    /**
     * Charger les données des ours pour vue.
     *
     * @return {string} string ours data.
     */

        loadDoc : async function() {
            var data;
            await fetch("http://localhost:3000/api/teddies/")
            .then(response => response.json())
            .then(response => data = JSON.stringify(response));
            return data
        
    },
    
    getOurs : function(id, product) {
        var items;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(product) {
                    items = this.responseText;
                } else
                    items = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000/api/teddies/".concat(id), false);
        xhttp.send();
        return items;
    },

    addOurs : function(){
        var url = "http://localhost:3000/api/teddies/order";
        var jsonInputString = JSON.stringify({ contact:
            {
                firstName: document.getElementById("nom").value,
                lastName: document.getElementById("prenom").value,
                address: document.getElementById("adresse").value,
                city: document.getElementById("ville").value,
                email: document.getElementById("email").value,
            },
            products: JSON.parse(localStorage.getItem("panier"))
        });

        let request = new XMLHttpRequest();
        request.open ("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(jsonInputString);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (this.status === 201) { 
                    localStorage.setItem( "order", this.responseText);
                    console.log(JSON.parse(this.responseText));
                    button.confirm();
                } else {
                    console.log(request); 
                }
            }
        };
    },
}



export {restApi};