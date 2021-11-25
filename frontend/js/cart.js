
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

          let ul = document.querySelector("#listProduct")
          let li = document.createElement("li")
          li.setAttribute("class"," align")
          li.setAttribute("id","list")
          ul.appendChild(li)
          let divImg = document.createElement("div")
          divImg.setAttribute("class","center")
          let divInfo = document.createElement("div")
          divInfo.setAttribute("class","col center")
          li.appendChild(divImg)
          li.appendChild(divInfo)
          let img = document.createElement("img")
          img.setAttribute("src",`${camera.imageUrl}`)
          img.setAttribute("width","300px")
          divImg.appendChild(img)
         
          let nameProduct = document.createElement("p")
          let priceProduct = document.createElement("p")
          let productQty = document.createElement("div")
          productQty.setAttribute("class","align")
          let option = document.createElement("p")
          let totalProduct = document.createElement("p")
          divInfo.appendChild(nameProduct)
          divInfo.appendChild(priceProduct)
          divInfo.appendChild(productQty)
          divInfo.appendChild(option)
          divInfo.appendChild(totalProduct)
          nameProduct.textContent =` ${ls[i].name}`
          option.textContent=`Lentille choisie: ${ls[i].option}`
          priceProduct.textContent=`Prix: ${ls[i].prix}€`

          let lessBtn = document.createElement("button")
          lessBtn.setAttribute("class","howMuchBtn")
          productQty.appendChild(lessBtn)
          lessBtn.textContent="-"
          let divCurrentQty = document.createElement("div")
          divCurrentQty.setAttribute("class","chooseNumber")
          divCurrentQty.setAttribute("id","qty")
          divCurrentQty.textContent=`${ls[i].quantite}`
          productQty.appendChild(divCurrentQty)
          let plusBtn = document.createElement("button")
          plusBtn.textContent="+"
          plusBtn.setAttribute("class","howMuchBtn")
          productQty.appendChild(plusBtn)

         
        //  let divPriceCancel =document.createElement("div")
         // textTotal.appendChild(divPriceCancel)
         // divPriceCancel.setAttribute("class"," align center space  ")
         // divPriceCancel.setAttribute("id","divCancelProduct")
          
          //divPriceCancel.appendChild(totalPrice)
          let  total= ls[i].quantite * ls[i].prix
          totalProduct.textContent=`Total:${total} €`
          let cancelBtn = document.createElement("button")
          cancelBtn.setAttribute("id","cancelProduct")
          let cancelBtnIcon = document.createElement("i")
          cancelBtnIcon.setAttribute("class","fas fa-times")
          li.appendChild(cancelBtn)
          cancelBtn.appendChild(cancelBtnIcon)
         
         

          lessBtn.addEventListener("click", ()=>{
           
            if(ls[i].quantite > 1){
              ls[i].quantite --
              localStorage.setItem("produit",JSON.stringify(ls))
              divCurrentQty.textContent=`${ls[i].quantite}`
              total = total - ls[i].prix
              totalProduct.textContent=`Total: ${total}€`
              }
              getAllTotal();
         });

         plusBtn.addEventListener("click", ()=>{
          if(ls[i].quantite >= 1){
            ls[i].quantite ++
            localStorage.setItem("produit",JSON.stringify(ls))
            divCurrentQty.textContent=`${ls[i].quantite}`
            total = total + ls[i].prix
            totalProduct.textContent=`Total:${total}€`
            }
            getAllTotal();
         });

        

         cancelBtn.addEventListener("click",()=>{
        
          ls.splice(i,1)
         
          if(ls.length > 0){
            ul.removeChild(li) 
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
 
  for(let i=0; i<ls.length;i++){
    for(let j=0; j<ls[i].quantite;j++){
      products.push(ls[i].id)
    }
  }
  console.log(newUser)
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


