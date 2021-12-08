export const url = 'http://localhost:3000/api/cameras';


 export async function callApi (url){
  return fetch(url)
  .then((resp) => resp.json())
  
  .then(function(cameras){
  return cameras
  })
  .catch(function(){
    alert("Problèmes de récupération de données")
  });
} 