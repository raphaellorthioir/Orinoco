// récupération de la chaîne de requête dans l'Url
 const queryString_url_id = window.location.search;

 // extraction de l'id
 const urlSearchParams = new URLSearchParams(queryString_url_id);
 const id = urlSearchParams.get("id")
 
// création d'une constante contenant l'URL avec en paramètre l'id de l'objet//
const url = `http://localhost:3000/api/cameras/${id}`;


        async function callApi (){
        return fetch(url)
       .then((resp) => resp.json())
        
       // On récupère une Promise qui prend en paramètre les données de l'api//
       .then(function(camera){
        return camera
       })
       .catch(function(error){
         alert(error)
       });
    } 

          
        ( async function getCameraPage (){
          camera = await callApi()
          let lenses= camera.lenses
          getPageProduct(camera)
          createCart();
          for(lense of lenses){
            displayLenses(lense)
          }
         })()
        
// fonction qui affiche le produit avec image, nom, prix, description , notation et liens de partage//.

const getPageProduct = function(camera){
    let display = document.getElementById('showProduct')
    let img = document.createElement('img')
    display.appendChild(img)
    img.setAttribute('src',camera.imageUrl)
    img.setAttribute('alt','Caméra modèle ...')
    let info =document.createElement('div')
    display.appendChild(info)
    info.setAttribute('class','product-info')
    let title = document.createElement('h1')
    info.appendChild(title)
    title.textContent = `${camera.name}`
    let price =document.createElement('span')
    title.appendChild(price)
    price.setAttribute('class','priceProduct')
    price.textContent= `${camera.price} €`
    let description = document.createElement('p')
    info.appendChild(description)
    description.textContent=camera.description
    let rate =document.getElementById('rate')
    info.appendChild(rate)
    let social =document.getElementById('social')
    info.appendChild(social)
  }
 // fonction qui fait apparître les différents choix de lentilles selon le produit affiché dans option.

displayLenses = function(lense){
 
    let select = document.getElementById('lense-select').appendChild(document.createElement('option'))
    select.setAttribute("value",lense)
    select.textContent= lense
 }


// création du panier

  function cartCounter (){
  
  
  let divcounter = document.getElementById('count')
  
 /* divContainer.setAttribute('id','cartContainer')
  cart.appendChild(divContainer)
  let title = document.createElement('h3')
  title.textContent="Votre panier"
  divContainer.appendChild(title)
  let uList = document.createElement('ul')
  divContainer.appendChild(uList)*/

  

 /* linkCartPage.setAttribute("class","cartIcon align center")
  linkCartPage.setAttribute("href","cart.html")
  c
  let iconCart1 = document.createElement("i")
  let iconCart2 = document.createElement("i")

  linkCartPage.appendChild(iconCart1,iconCart2)*/
  
}
 