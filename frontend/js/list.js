
function addImage(){
    let div = document.getElementById("x");
    let texte =document.createElement("p");
    div.appendChild(texte);
    let image = document.createElement("img");
    div.appendChild(image);
    image.setAttribute("src","camera.jpg");
}
 window.onload = addImage();
  

