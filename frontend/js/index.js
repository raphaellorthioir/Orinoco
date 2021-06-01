
 /* let cameras;

 const searchCameras= async() => {
   cameras= await  fetch('http://localhost:3000/api/cameras')
   .then(res => res.json());
  
   console.log(cameras);
};*/

/*let getAllCamera = url
  let nameCamera = document.getElementById("nameCamera");*/
  
  // création d'une constante contenat l'URL//
  const url = 'http://localhost:3000/api/cameras';
  // connexion à l'Api//
  function apiCall() {
   fetch(url)
     //on récupére la réponse de fetch et on le rend lisible par le navigateur en transformant la réponse au format JSON//
     .then((resp) => resp.json());

 };
  
   
    // fonction qui affiche toutes les caméras//

    const getAllFigures = function () {

       for(let i=0;i<=4;i++){
       
        let element = document.getElementById('createFigure')
        let figure = document.createElement('figure')
        element.appendChild(figure)
        let translateImg =`startImg${i+1}` //template string
        figure.setAttribute("id",translateImg)
        let bgd =document.createElement('div')
        //let bgdImg= ` bgdImg${i+1}`//
         bgd.classList.add('photoArea', `bgdImg${i+1}`) // Ajout d'une liste de classe
       // bgd.setAttribute('class', "'photoArea `bgdImg${i+1}`'" )
        figure.appendChild(bgd)
        let img = document.createElement('img')
        bgd.appendChild(img);
        img.setAttribute('class','showImage')
        img.setAttribute('src','../img/vcam_1.jpg');
        let figcaption = document.createElement('figcaption')
        figure.appendChild(figcaption)
        let title = document.createElement('h2')
        figcaption.appendChild(title)
        title.textContent="Titre caméra";
        title.setAttribute('id','nameCamera')
        let link =document.createElement('a')
        figcaption.appendChild(link)
        link.setAttribute("href","product.html")
        link.setAttribute('class','detailBtn align space')
        let icon = document.createElement('i')
        link.appendChild(icon)
        icon.setAttribute('class','fas fa-camera-retro')
        let text =document.createElement('p')
        link.appendChild(text)
        text.textContent="Je flash !";
        
      
       
        
    
         };
       };

       window.addEventListener("DOMContentLoaded", () => {
        getAllFigures();
    });