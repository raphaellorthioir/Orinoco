

/*( async function getAllCameras (){
   let cameras = await callApi()
   var i=0;
   let camera;
  for(camera of cameras){
    i++;
   displayCameras(camera,i)
     }
  })();*/
  
  //let commande = localStorage.getItem('commande1')
  //let commandJson = JSON.parse(commande);
  //let name =commandJson.name
 // console.log(commandJson.name)

  function displayTable(){

    let description = document.querySelector("#description")
    //let imgProduct = document.createElement("img")
   /* description.appendChild(imgProduct)
    imgProduct.setAttribute("src",``)*/
    let nameCamera = document.createElement("button")
    description.appendChild(nameCamera)
    nameCamera.textContent= "ggggg"
    
   /*  let price = document.querySelector("#price")
    price.textContent =``

    let qty = document.querySelector("#chooseQty")
    qty.textContent=``

    let total = document.querySelector("#total")
    total.textContent=``*/

   
  }
  displayTable();
 