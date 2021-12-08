 export let cartCount = function() {
    let cartCount =document.querySelector("#count")
    let ls = JSON.parse(localStorage.getItem("produit"))
    if(ls){
    cartCount.textContent= `${ls.length}`
    }
    else{ cartCount.textContent="0"}
}
