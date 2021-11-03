

import {callApi, url} from "./modules/callApi.js"

( async function getCartProducts (){
  let cameras = await callApi()
  let camera
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
  
 
  function getListProduct(camera,ls){

    
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
          nameOption.textContent=`Lentille choisie: ${ls[i].option}`
         
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
          divCurrentQty.setAttribute("id","qty")
          divCurrentQty.textContent=`${ls[i].quantite}`
          divBtnQty.appendChild(divCurrentQty)
          let plusBtn = document.createElement("button")
          plusBtn.textContent="+"
          plusBtn.setAttribute("class","howMuchBtn")
          divBtnQty.appendChild(plusBtn)

          
          let textTotal= document.createElement("td")
          let  total= ls[i].quantite * ls[i].prix
          tr.appendChild(textTotal)
          textTotal.textContent=`${total} €`
          let allTotal

          lessBtn.addEventListener("click", ()=>{
           
            if(ls[i].quantite > 1){
              ls[i].quantite --
              localStorage.setItem("produit",JSON.stringify(ls))
              divCurrentQty.textContent=`${ls[i].quantite}`
              total = total - ls[i].prix
              textTotal.textContent=`${total}€`
              }
              getAllTotal();
         });

         plusBtn.addEventListener("click", ()=>{
          if(ls[i].quantite >= 1){
            ls[i].quantite ++
            localStorage.setItem("produit",JSON.stringify(ls))
            divCurrentQty.textContent=`${ls[i].quantite}`
            total = total + ls[i].prix
            textTotal.textContent=`${total}€`
            }
            getAllTotal();
         });
        }
      }
      
      
  }
  getAllTotal();


  function getAllTotal(){
    let totalNode = document.querySelector("#totalCart")
    let totalCart = 0 ;
    for (let i=0; i < ls.length; i++) {
       
      totalCart = totalCart + ((ls[i].quantite * ls[i].prix))
    }
    totalNode.textContent=`${totalCart} €`
  }
