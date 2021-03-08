import {localStor} from "./localStorage.js";
import {restApi} from "/js/modules/restApi.js";

export const button = {
    //bouton retour à la page d'accueil
    returnHome : function() {
        document.location.href="index.html";
    },

    // bouton "commander" en dessous du formulaire
    orderBtn : function(total) {
        restApi.addOurs()
        // On stock dans le localStorage notre id de commande
        localStor.setOrderConfirm(total);
        
    },

    deleteOneItem : function(array, index){
        array.splice(index, 1);
        array = JSON.stringify(array);
        localStorage.setItem("panier", array);
    },

    confirm : function() {
        console.log('redirection cmd confirm')
        document.location.href="command-confirm.html";
    }

}
