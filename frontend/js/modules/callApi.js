export const url = 'http://localhost:3000/api/cameras';


 export async function callApi (){
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