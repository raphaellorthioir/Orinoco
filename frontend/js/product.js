// récupération de la chaîne de requête dans l'Url
 const queryString_url_id = window.location.search;

 // extraction de l'id
 const urlSearchParams = new URLSearchParams(queryString_url_id);
 const id = urlSearchParams.get("id")
 
  // connexion à l'Api//
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
 
displayLenses = function(lense){
 
    let select = document.getElementById('lense-select').appendChild(document.createElement('option'))
    let createOption = document.createElement("option")
    select.appendChild(createOption)
    createOption.textContent= lense
    
}