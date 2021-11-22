
import {callApi, url} from "./modules/callApi.js"
 

  let ls=JSON.parse(localStorage.getItem("produit"));
  let countView =document.querySelector("#count")
  let totalCart
  
   
  
   
  
  function getAllTotal(){
    let totalNode = document.querySelector("#totalCart")
    totalCart = 0 ;
    for (let i=0; i < ls.length; i++) {
       
      totalCart = totalCart + ((ls[i].quantite * ls[i].prix))
    }
    totalNode.textContent=`Panier total: ${totalCart} €`
  }
 
 function emptyCartScreen(){
   let emptyCartText = document.createElement("p")
   main.appendChild(emptyCartText)
   emptyCartText.textContent="Panier vide"
   emptyCartText.setAttribute("id","emptyCartText")
 }


( async function getCartProducts (){
  let cameras = await callApi(url)
  let camera
  if(ls){

    for (camera of cameras){
      
        getListProduct(camera,ls)
       
     }
   }else{
/*      let parentTable = document.querySelector("#divTable")
      let childTable = document.querySelector("#table")
      parentTable.removeChild(childTable)*/
      let main = document.querySelector("#main")
      let section = document.querySelector("#section") 
      main.removeChild(section)
      emptyCartScreen();
    }
  })()
 
  
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
            let main = document.querySelector("#main")
            let section = document.querySelector("#section") 
            main.removeChild(section)
            countView.textContent=`0`
            emptyCartScreen();
           }
         })
         getAllTotal();
        }
      }
 }
  
//formulaire

let userForm = document.querySelector("#orderForm")

userForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let contact = {} 
  let products = []
  let newUser ={
   contact,
   products,
}
  

  
  contact.firstName = document.querySelector("#firstName").value 
  contact.lastName = document.querySelector("#lastName").value 
  contact.address = document.querySelector("#address").value 
  contact.city = document.querySelector("#city").value
  contact.email = document.querySelector("#userMail").value
 
  
  
 const urlOrder = fetch("http://localhost:3000/api/cameras/order",{

    method: "POST",
    body:JSON.stringify(newUser),
    headers:{
      "Content-Type":"application/json"
    }
})

urlOrder.then(response => response.json()).then( (response)=>{
  try{
    
    response.products=ls
    getAllTotal()
    response.totalOrder = totalCart
    console.log(totalCart)
    localStorage.setItem("order",JSON.stringify(response))
    localStorage.removeItem("produit")
    document.location.href="orderSum.html"
    
  }catch(e){
    console.log("erreur")
  }
})

})


