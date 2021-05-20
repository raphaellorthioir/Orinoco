import cameras[] from '../../backend/routes/camera.js';

function addImage (){
    let allProducts = document.getElementById("allProducts");
    let figure = document.createElement("figure");
    figure.setAttribute("id","startImg1");
    let divImage= document.createElement("div");
    divImage.setAttribute("class","photoArea bgdImg1 center");
    let img =document.createElement("img");
    img.setAttribute("src","../img/camera.jpg");
    divImage.appendChild(img);
    figure.appendChild(divImage);
    allProduct.appenchild(figure);

}

fetch("http://localhost:3000/api/cameras")
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
   