let ours = loadDoc();
ours = JSON.parse(ours);
console.log (ours);
ours.forEach(element => {
    console.log(element.name);
    document.getElementById("conteneurproduit").innerHTML += "<h1>"+element.name+"</h1>";
    document.getElementById("imgproduit").innerHTML += "<div>"+element.imageUrl+"</div>";
    document.getElementById("description").innerHTML += "<p>"+element.description+"<p>";
    document.getElementById("price").innerHTML += "<p>"+element.price+"<p>";

});










function loadDoc() {
    var items;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       items = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/teddies", false);
    xhttp.send();
    return items;
  }