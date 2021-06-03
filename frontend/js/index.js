

  
  // création d'une constante contenant l'URL//
  const url = 'http://localhost:3000/api/cameras';

  // connexion à l'Api//
  
   /* fetch(url)
      //on récupére la réponse de fetch et on le rend lisible par le navigateur en transformant la réponse au format JSON//
      .then(res =>res.json())
      
      .then(data => image.src = data[2].imageUrl )*/ //Affiche une image par défaut

     
      // Autre tentative//
      
      function apiCall(){
      fetch(url)
      .then((resp) => resp.json())
       
      // On récupère une Promise qui prend en paramètre les données de l'api//
      .then(function(cameras){
        console.log(cameras)
      })
      .catch(function(error){
        console.log(error);
      });
   }
     
     apiCall();
     
 // try/ catch pour remarquer si il y a des erreurs dans l'appel de l'Api
 /*try{
  apiCall();
 } catch(e){
   console.log("Erreur dans l'appel de l'Api "+ e)
   window.alert("Erreur du serveur , veuillez patienter")
 }*/
  
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
        img.setAttribute('id','img')
        //img.setAttribute('src',imageUrl);
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