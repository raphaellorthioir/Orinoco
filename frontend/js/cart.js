const url = 'http://localhost:3000/api/cameras';

async function callApi (){
  return fetch(url)
 .then((resp) => resp.json())
  
 // On récupère une Promise qui prend en paramètre les données de l'api//
 .then(function(cameras){
  return cameras
 })
 .catch(function(error){
   alert(error)
 });
} 

( async function getCartProducts (){
  let cameras = await callApi()
  let lenses = cameras.lenses

  if(ls){

    for (camera of cameras){
      
        getListProduct(camera,ls)
     }
   }else{
      let parentTable = document.querySelector("#divTable")
      let childTable = document.querySelector("#table")
      parentTable.removeChild(childTable)
    }
  })()
 
  let ls=JSON.parse(localStorage.getItem("produit"));
  console.log(ls)
  //let commande = localStorage.getItem('commande1')
  //let commandJson = JSON.parse(commande);
  //let name =commandJson.name
 // console.log(commandJson.name)

  function getListProduct(camera,ls,lense){

    
      for(let i=0; i<ls.length; i++){
        if(camera._id === ls[i].id ){

          let tbody= document.querySelector("#createLine")
          let tr = document.createElement("tr")
          tbody.appendChild(tr)
          let tdDescription = document.createElement("td")
          tdDescription.setAttribute("class","align center")
          tr.appendChild(tdDescription)
          let divNameOpt = document.createElement("div")
          divNameOpt.setAttribute("class","col")
          let lienPageProduit = document.createElement("a")
          lienPageProduit.setAttribute("href",`product.html?id=${camera._id}`)
          tdDescription.appendChild(lienPageProduit)
          tdDescription.appendChild(divNameOpt)
          let imgProduit = document.createElement("img")
          imgProduit.setAttribute("src",`${camera.imageUrl}`)
          lienPageProduit.appendChild(imgProduit)
          let nameModel = document.createElement("p")
          nameModel.textContent =` ${ls[i].name}`
          let nameOption = document.createElement("p") 
          divNameOpt.appendChild(nameModel)
          divNameOpt.appendChild(nameOption)
          nameOption.textContent=` Option choisie: ${ls[i].option}`
         
          let tdPrice = document.createElement("td")
          tr.appendChild(tdPrice)
          tdPrice.textContent=`${ls[i].prix}€`

          let tdQty = document.createElement("td")
          tr.appendChild(tdQty)
          let divBtnQty = document.createElement("div")
          divBtnQty.setAttribute("class","align center")
          tdQty.appendChild(divBtnQty)
          let lessBtn = document.createElement("button")
          lessBtn.setAttribute("class","howMuchBtn")
          divBtnQty.appendChild(lessBtn)
          lessBtn.textContent="-"
          let divCurrentQty = document.createElement("div")
          divCurrentQty.setAttribute("class","chooseNumber")
          divCurrentQty.textContent=`${ls[i].quantite}`
          divBtnQty.appendChild(divCurrentQty)
          let plusBtn = document.createElement("button")
          plusBtn.textContent="+"
          plusBtn.setAttribute("class","howMuchBtn")
          divBtnQty.appendChild(plusBtn)

          let total= document.createElement("td")
          tr.appendChild(total)
          total.textContent=`${ls[i].quantite * ls[i].prix} €`

        }
       
    }
   
   /*  let price = document.querySelector("#price")
    price.textContent =``

    let qty = document.querySelector("#chooseQty")
    qty.textContent=``

    let total = document.querySelector("#total")
    total.textContent=``*/

   
  }
  
 