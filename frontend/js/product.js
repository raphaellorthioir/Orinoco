// fonction qui affiche le produit avec image, nom, prix, description , notation et liens de partage//.

const getPageProduct = function(){
    let display = document.getElementById('showProduct')
    let img = document.createElement('img')
    display.appendChild(img)
    img.setAttribute('src','../img/camera.jpg')
    img.setAttribute('alt','Caméra modèle ...')
    let info =document.createElement('div')
    display.appendChild(info)
    info.setAttribute('class','product-info')
    let title = document.createElement('h1')
    info.appendChild(title)
    title.textContent ='Camera modèle...'
    let price =document.createElement('span')
    title.appendChild(price)
    price.setAttribute('class','priceProduct')
    price.textContent='49900 €'
    let description = document.createElement('p')
    info.appendChild(description)
    description.textContent='lorem ipsum'
    let rate =document.getElementById('rate')
    info.appendChild(rate)
    let social =document.getElementById('social')
    info.appendChild(social)
   
    console.log(rate)
}
window.addEventListener("DOMContentLoaded", () => {
    getPageProduct();
});