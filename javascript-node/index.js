/*const request = require('request');
request('http://google.com', function(){
  console.log('Terminé la petición de google');
});
console.log('Yo voy despues de la peticion a google')

//Promesa  Estados; fullfield:completa, rejected:no terminada con exito(error)
//pending:pendiente, setled: finalizada con exito o con error
const rp = require('request-promise');
rp('http://google.com') // devuelve un objeto tipo Promise;
  .then(function(html){
      console.log('Terminé la petición de google');
  }).catch(function(err){
    console.log(err)
  });*/
const request = require('request');

function leer(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, response){
      if(err) {
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

leer('http://codigofacilito.com').then(function(response){
  console.log(response);
}).catch  (function(err){
  console.log(err);
});
