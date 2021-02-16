const panier = {

    deleteOneItem : function(array, index){
        array.splice(index, 1);
        array = JSON.stringify(array);
        localStorage.setItem("panier", array);
    },
    addOneItem : function(){

    },






}
export {panier};