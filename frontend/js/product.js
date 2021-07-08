
// récupération de la chaîne de requête dans l'Url (?+...)
 const queryString_url_id = window.location.search;

 // création constructeur renvoyant un objet url 
 const urlSearchParams = new URLSearchParams(queryString_url_id);
 //on récupère la valeur de la clé indiqué en paramètre
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
          for(lense of lenses){
            displayLenses(lense)
          }
         })()
  
         var productQty= 1 ; 
         var panier = [];
         var objet ={};
         let chosenOption;
         
         
        
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

     
   objet.name= camera.name;
   objet.id = camera._id;
     // gestion quantité de produit
     
     
     let lessBtn = document.querySelector("#lessBtn")
     let plusBtn = document.querySelector("#plusBtn")
     let qty = document.getElementById('productQty')
         qty.textContent =`${productQty}`
     
    plusBtn.addEventListener("click", ()=>{
       productQty++
       objet.quantite= productQty;
       qty.textContent =`${productQty}`;
       })
     lessBtn.addEventListener("click",() =>{
       if(productQty>1){
        productQty--
        objet.quantite= productQty;
        qty.textContent=`${productQty}`
         }
       })

       
  // local storage
  let addCart = document.querySelector("#addCart")
  let nbOfOrder=1;
 
  addCart.addEventListener("click",()=>{
    if(localStorage.length==0){
      var commandeJson = JSON.stringify(objet);
      localStorage.setItem(`commande${nbOfOrder}`, commandeJson)
    }
    else{
      var commandeJson = JSON.stringify(objet);
      localStorage.setItem(`commande${nbOfOrder + localStorage.length}`, commandeJson)
      
    }
    
})
  
    
   /* localStorage.setItem("nom",camera.name)
    localStorage.setItem("prix",camera.price)
    localStorage.setItem("id",camera._id)
    localStorage.setItem("quantité",productQty)
    localStorage.setItem("option",chosenOption)*/
  
  
}
  
 // fonction qui fait apparître les différents choix de lentilles selon le produit affiché dans option.

 let displayLenses = function(lense){
 
  select = document.getElementById('lense-select').appendChild(document.createElement('option'))
  select.setAttribute("value",lense)
  select.setAttribute("id","option")
  select.textContent= lense
  
  let optSelected= document.querySelector("#lense-select");
  optSelected.addEventListener("change",()=>{
  objet.option=optSelected.value;
  console.log(objet.option)
  })
}
  
