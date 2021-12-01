
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
          let lense;
          getPageProduct(camera)
          for(lense of lenses){
            displayLenses(lense)
          }
          })()
         
         
     let objet={}
     
         
        
// fonction qui affiche le produit avec image, nom, prix, description , notation et liens de partage//.

let displayLenses = function(lense){
 
  select = document.getElementById('lense-select').appendChild(document.createElement('option'))
  select.setAttribute("value",lense)
  select.setAttribute("id","option")
  select.textContent= lense
  
  let optSelected= document.querySelector("#lense-select");
  optSelected.addEventListener("change",()=>{
  objet.option=optSelected.value;
  
  })
  return objet.option
}
const getPageProduct = function(camera){


  objet={
     image: camera.imageUrl,
     prix:camera.price
   }
   
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
     
     var productQty=1;
     objet.quantite = productQty
     let lessBtn = document.querySelector("#lessBtn")
     let plusBtn = document.querySelector("#plusBtn")
     let qty = document.getElementById('productQty')
         qty.textContent =`${productQty}`
     
    
    plusBtn.addEventListener("click", ()=>{
       
       productQty++
       qty.textContent =`${productQty}`;
      objet.quantite =productQty;
       })
     lessBtn.addEventListener("click",() =>{
       if(productQty>1){
        productQty--
        qty.textContent=`${productQty}`
        objet.quantite= productQty
         }
        })
        

  // local storage
  let addCart = document.querySelector("#addCart")
  let ls =JSON.parse(localStorage.getItem("produit"));
  let countView =document.querySelector("#count")
  if(!ls){
    countView.textContent="0"
 } else{countView.textContent=`${ls.length}`}
  addCart.addEventListener("click", function event (){
    
    if(objet.option){
      if (ls){
        let objTrouve = false
        for(let i=0; i < ls.length; i++){
          if(objet.id === ls[i].id && objet.option === ls[i].option){ 
            objTrouve=true
            ls[i].quantite = objet.quantite + ls[i].quantite
            }
           }
        if(!objTrouve){
          ls.push(objet)
           }
          
          localStorage.setItem("produit", JSON.stringify(ls));
          popupconfirmation();
         } else{
       
       ls=[];
       ls.push(objet);
       localStorage.setItem("produit", JSON.stringify(ls));
       popupconfirmation();
       }
       document.querySelector('#lense-select').setAttribute("disabled","disabled")
       addCart.removeEventListener("click", event);
       console.log(ls)
    } else{
      alert("choisir une option")
    } 
    countView.textContent=`${ls.length}`
    console.log(ls)
  })

//fonction fenêtre popup
  const popupconfirmation= () =>{
  
  let getMain = document.querySelector("main")
  let popup= document.createElement('div')
  popup.setAttribute('id','popup')
  getMain.appendChild(popup)
  let question = document.createElement('p')
  popup.appendChild(question)
  question.textContent="Consulter votre panier ?"
  let answers = document.createElement('div')
  answers.setAttribute('id','answers')
  popup.appendChild(answers)
  let yesAnswer = document.createElement('p')
  yesAnswer.textContent="Oui"
  yesAnswer.setAttribute('id','yes')
  answers.appendChild(yesAnswer)
  let notYetAnswer = document.createElement('p')
  notYetAnswer.textContent="pas encore"
  notYetAnswer.setAttribute("id","no")
  answers.appendChild(notYetAnswer)

  yesAnswer.addEventListener("click",()=>{
    document.location.href="cart.html"
  })
  notYetAnswer.addEventListener("click",()=>{
    document.location.href="index.html"
  })

  }

}
 // fonction qui fait apparître les différents choix de lentilles selon le produit affiché dans option.

 
  
