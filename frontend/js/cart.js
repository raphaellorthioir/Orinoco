

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
  let countView =document.querySelector("#count")
  if(!ls){
    countView.textContent="0"
 } else{countView.textContent=`${ls.length}`}
 
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
          tr.appendChild(textTotal)
          let divPriceCancel =document.createElement("div")
          textTotal.appendChild(divPriceCancel)
          divPriceCancel.setAttribute("class"," align center space-b ")
          divPriceCancel.setAttribute("id","divCancelProduct")
          let totalPrice = document.createElement("p")
          divPriceCancel.appendChild(totalPrice)
          let  total= ls[i].quantite * ls[i].prix
          totalPrice.textContent=`${total} €`
          let cancelBtn = document.createElement("button")
          cancelBtn.setAttribute("id","cancelProduct")
          let cancelBtnIcon = document.createElement("i")
          cancelBtnIcon.setAttribute("class","fas fa-times")
          cancelBtn.appendChild(cancelBtnIcon)
          divPriceCancel.appendChild(cancelBtn)
         

          lessBtn.addEventListener("click", ()=>{
           
            if(ls[i].quantite > 1){
              ls[i].quantite --
              localStorage.setItem("produit",JSON.stringify(ls))
              divCurrentQty.textContent=`${ls[i].quantite}`
              total = total - ls[i].prix
              totalPrice.textContent=`${total}€`
              }
              getAllTotal();
         });

         plusBtn.addEventListener("click", ()=>{
          if(ls[i].quantite >= 1){
            ls[i].quantite ++
            localStorage.setItem("produit",JSON.stringify(ls))
            divCurrentQty.textContent=`${ls[i].quantite}`
            total = total + ls[i].prix
            totalPrice.textContent=`${total}€`
            }
            getAllTotal();
         });

        

         cancelBtn.addEventListener("click",()=>{
        
          ls.splice(i,1)
         
          if(ls.length > 0){
            tbody.removeChild(tr) 
            localStorage.setItem("produit",JSON.stringify(ls))
            countView.textContent=`${ls.length}`
            getAllTotal();
          }else{
            localStorage.removeItem("produit")
            let parentTable = document.querySelector("#divTable")
            let childTable = document.querySelector("#table")
            parentTable.removeChild(childTable)
            countView.textContent=`0`
            getAllTotal();
            
           
          }
         })
         getAllTotal();
         
        }
      

      }

  }
  
  


  function getAllTotal(){
    let totalNode = document.querySelector("#totalCart")
    let totalCart = 0 ;
    for (let i=0; i < ls.length; i++) {
       
      totalCart = totalCart + ((ls[i].quantite * ls[i].prix))
    }
    totalNode.textContent=`Panier total: ${totalCart} €`
  }
 
