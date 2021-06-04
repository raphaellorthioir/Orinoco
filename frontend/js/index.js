

  
  // création d'une constante contenant l'URL//
  const url = 'http://localhost:3000/api/cameras';
 
  // connexion à l'Api//
  
   /*  fetch(url)
      //on récupére la réponse de fetch et on le rend lisible par le navigateur en transformant la réponse au format JSON//
      .then(res =>res.json())
      
      .then(data => image.src = data[3].imageUrl ) //Affiche une image par défaut*/
      (async function(){
        const cameras = await getCameras()
        var i=0;
        for(camera of cameras){
          i++;
          displayCameras(camera,i)
          
        }
      })()
      
      // Autre tentative//
      
      async function getCameras(){
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
     
     
 // try/ catch pour remarquer si il y a des erreurs dans l'appel de l'Api
 /*try{
  apiCall();
 } catch(e){
   console.log("Erreur dans l'appel de l'Api "+ e)
   window.alert("Erreur du serveur , veuillez patienter")
 }*/
  
    // fonction qui affiche toutes les caméras//

        function displayCameras (camera,i) {
            
            let element = document.getElementById('createFigure')
            let figure = document.createElement('figure')
            element.appendChild(figure)
            figure.setAttribute("id",`startImg1`)
            let bgd =document.createElement('div')
            bgd.classList.add('photoArea', `bgdImg${i}`) // Ajout d'une liste de classe
            figure.appendChild(bgd)
            let img = document.createElement('img')
            bgd.appendChild(img);
            img.setAttribute('class','showImage')
            img.setAttribute('id','img')
            img.setAttribute('src',camera.imageUrl);
            let figcaption = document.createElement('figcaption')
            figure.appendChild(figcaption)
            let title = document.createElement('h2')
            figcaption.appendChild(title)
            title.textContent= camera.name;
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

       