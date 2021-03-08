const localStor = {

   panier : function(id) {
    if(localStorage.getItem("panier")) {
        let tabId = localStorage.getItem("panier");
        tabId = JSON.parse(tabId);
        tabId.push(id) 
        tabId = JSON.stringify(tabId);
        localStorage.setItem("panier", tabId);
        }
    else {
        let tabId = [id];
        tabId = JSON.stringify(tabId);
        localStorage.setItem("panier", tabId);
        }
        document.location.href="basket.html";
    },

    setOrderConfirm: function(total) {
        localStorage.setItem("total", total);
    }
}

export {localStor};
