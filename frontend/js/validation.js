let ls = JSON.parse(localStorage.getItem("order"));
function getCameras (){
   
 if(ls){
    getList(ls);
}else{
    document.location.href="index.html"
    }
}
getCameras();

function getList(ls){

    let customerId = document.querySelector("#orderId")
    customerId.textContent=`${ls.orderId}`

    for(let i =0; i< ls.products.length;i++){

        let getList= document.querySelector("#productList")
        let ul = document.createElement("ul")
        ul.setAttribute("id","boxList")
        getList.appendChild(ul)
        let blockProduct = document.createElement("div")
        blockProduct.setAttribute("class","align")
        ul.appendChild(blockProduct)
        let divImg = document.createElement("div")
        blockProduct.appendChild(divImg)
        let img = document.createElement("img")
        img.setAttribute("src",`${ls.products[i].image}`)
        img.setAttribute("id","validPageImg")
        divImg.appendChild(img)
        let divName = document.createElement("div")
        blockProduct.appendChild(divName)
        divName.textContent=`Nom: ${ls.products[i].name}`
        let divOption = document.createElement("div")
        blockProduct.appendChild(divOption)
        divOption.textContent=`option: ${ls.products[i].option}`
        blockProduct.setAttribute("class","align")
        let div = document.createElement("div")
        div.setAttribute("class"," col ")
        div.setAttribute("id","divList")
        blockProduct.appendChild(div)
        div.appendChild(divName)
        div.appendChild(divOption)
        let divQty = document.createElement("div")
        divQty.textContent=`Quantité: ${ls.products[i].quantite}`
        div.appendChild(divQty)
        let orderIdUser = document.querySelector("#orderId")
        orderIdUser.textContent=`${ls.orderId}`
        let userFirstName = document.querySelector("#firstName")
        userFirstName.textContent = `${ls.contact.firstName}`
        let userLastName = document.querySelector("#lastName")
        userLastName.textContent=`${ls.contact.lastName}`
        let userCity = document.querySelector("#city")
        userCity.textContent =`${ls.contact.city}`
        let userAddress = document.querySelector("#address")
        userAddress.textContent=`${ls.contact.address}`
        let userMail = document.querySelector("#email")
        userMail.textContent=`${ls.contact.email}`
        let total = document.querySelector("#total")
        total.textContent=`${ls.totalOrder}`
     }
localStorage.removeItem("order")
}