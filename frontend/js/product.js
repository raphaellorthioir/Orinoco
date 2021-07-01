
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

     // gestion quantité de produit
     
     var productQty = 1;
     let lessBtn = document.querySelector("#lessBtn")
     let plusBtn = document.querySelector("#plusBtn")
     let qty = document.getElementById('productQty')
         qty.textContent =`${productQty}`
     
    plusBtn.addEventListener("click", ()=>{
       productQty++
      qty.textContent =`${productQty}`;
      
   })
     lessBtn.addEventListener("click",() =>{
       if(productQty>1){
        productQty--
        qty.textContent=`${productQty}`
       }
       })

       
 
  
 // fonction qui fait apparître les différents choix de lentilles selon le produit affiché dans option.
let chosenOption;
let displayLenses = function(lense){
 
    select = document.getElementById('lense-select').appendChild(document.createElement('option'))
    select.setAttribute("value",lense)
    select.setAttribute("id","option")
    select.textContent= lense
    
    let optSelected= document.querySelector("#lense-select");
    optSelected.addEventListener("change",()=>{
    chosenOption=optSelected.value;
    console.log(chosenOption)
    })
    }
   /*  // local storage
      
        
     let addCart = document.querySelector("#addCart")
     addCart.addEventListener("click",()=>{
   
       localStorage.setItem("nom",camera.name)
       localStorage.setItem("prix",camera.price)
       localStorage.setItem("id",camera._id)
       localStorage.setItem("quantité",productQty)
       localStorage.setItem("option",chosenOption)
        })*/
  }


